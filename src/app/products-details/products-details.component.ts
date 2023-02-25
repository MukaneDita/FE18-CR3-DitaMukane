import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { menuProducts, IProducts } from '../menu-products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product: IProducts = {} as IProducts;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cs: CartService
  ) { }

  addToCart(obj: IProducts) {
    alert("added");
    this.cs.addToCart(obj);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = + params["id"];
      this.product = menuProducts[this.id];
    });
  }
}
