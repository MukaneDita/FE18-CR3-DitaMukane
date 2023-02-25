import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { menuProducts, IProducts } from '../menu-products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  products: Array<IProducts> = menuProducts;
  constructor(private cs: CartService) {

  }
  addToCart(obj: IProducts) {
    alert("added");
    this.cs.addToCart(obj);
  }
}
