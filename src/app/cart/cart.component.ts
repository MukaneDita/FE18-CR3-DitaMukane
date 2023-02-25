import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../menu-products';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Array<IProducts> = [];
  checkoutForm = this.fb.group({
    name: '',
    address: '',
  });
  constructor(private cs: CartService, private fb: FormBuilder) { }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.cart = this.cs.getCart();
  }
  quantity: number = 1
  i = 1
  plus() {
    if (this.i) {
      this.i++;
      this.quantity = this.i;
    }
  }
  minus() {
    if (this.i != 1) {
      this.i--;
      this.quantity = this.i;
    }
  }
}
