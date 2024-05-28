import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@shared/services/product.service';
import { CartService } from '@shared/services/cart.service';
import { Product } from '@shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export default class ProductDetailComponent {

  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('../../../../../assets/default-product.png'); // Ruta de la imagen por defecto

  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
        }
      });
    }
  }

  changeCover(newImg: string) {
    this.cover.set(newImg);
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }

  handleImageError(event: Event) {
    const element = event.target as HTMLImageElement;
    element.src = '../../../../../assets/default-product.png'; // Ruta de la imagen por defecto
  }
}
