import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';

import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);

  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  handleImageError(event: Event) {
    const element = event.target as HTMLImageElement;
    element.src = '../../../../../assets/default-product.png'; // Ruta de la imagen por defecto
  }
}
