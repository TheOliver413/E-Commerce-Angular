import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        createAt: new Date().toDateString(),
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=24',
        createAt: new Date().toDateString(),
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=25',
        createAt: new Date().toDateString(),
      },
      {
        id: Date.now(),
        title: 'Product 4',
        price: 100,
        image: 'https://picsum.photos/640/640?r=26',
        createAt: new Date().toDateString(),
      },
      {
        id: Date.now(),
        title: 'Product 5',
        price: 100,
        image: 'https://picsum.photos/640/640?r=27',
        createAt: new Date().toDateString(),
      },
      {
        id: Date.now(),
        title: 'Product 6',
        price: 100,
        image: 'https://picsum.photos/640/640?r=28',
        createAt: new Date().toDateString(),
      },
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
