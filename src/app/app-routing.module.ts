import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "menu", component: MenuComponent
}, {
  path: "about-us", component: AboutUsComponent
}, {
  path: "cart", component: CartComponent
}, {
  path: "products/:id", component: ProductsDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
