import { Injectable } from '@angular/core';
import { IProducts } from './menu-products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<IProducts> = [];
  constructor() { }
  addToCart(obj: IProducts) {
    this.cart.push(obj);
  }
  getCart() {
    return this.cart;
  }
  clearCart() {
    this.cart = [];
    return this.cart;
  }
  total() {
    let total: number = 0;
    for (let obj of this.cart) {
      total = total + (obj.price * obj.quantity);
    }
    return total;
  }

  deleteQtty(i: number) {
    this.cart[i].quantity = 1;
    this.cart.splice(i, 1);
  }

}
