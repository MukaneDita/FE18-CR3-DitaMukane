import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { menuProducts, IProducts } from '../menu-products';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product: IProducts = {} as IProducts;
  id: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = + params["id"];
      this.product = menuProducts[this.id];
    });
  }
}
