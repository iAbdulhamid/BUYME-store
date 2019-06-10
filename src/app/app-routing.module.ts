import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { AdminManageUsersComponent } from './admin/admin-manage-users/admin-manage-users.component';
import { AdminAuthGuardService } from './Services/admin-auth-guard.service';
import { NewProductFormComponent } from './admin/new-product-form/new-product-form.component';

const routes: Routes = [
  {path:'', component: ProductsComponent},
  {path:'login', component: LoginComponent},
  {path:'shopping-cart', component: ShoppingCartComponent},

  {path:'products', component: ProductsComponent, canActivate: [AuthGuardService]}, 
  {path:'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  {path:'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
  {path:'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},

  {path:'admin/orders',       component: AdminOrdersComponent,      canActivate: [AuthGuardService, AdminAuthGuardService]},
  {path:'admin/users',        component: AdminManageUsersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
  {path:'admin/products/new', component: NewProductFormComponent,   canActivate: [AuthGuardService, AdminAuthGuardService]},
  {path:'admin/products/:id', component: NewProductFormComponent,   canActivate: [AuthGuardService, AdminAuthGuardService]},
  {path:'admin/products',     component: AdminProductsComponent,    canActivate: [AuthGuardService, AdminAuthGuardService]},

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
