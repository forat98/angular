import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { OrdersComponent } from './orders-page/orders/orders.component';
import { SignUpComponent } from './sign-Up/sign-Up/sign-Up.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'sign-Up', component: SignUpComponent },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
