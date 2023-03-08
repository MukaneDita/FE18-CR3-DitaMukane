import { Component } from '@angular/core';
import { menuProducts, IProducts } from '../menu-products';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Array<IProducts> = menuProducts;

}
