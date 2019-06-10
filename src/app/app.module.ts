import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { CustomFormsModule } from 'ng2-validation';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { environment } from 'src/environments/environment.prod';
import { AdminManageUsersComponent } from './admin/admin-manage-users/admin-manage-users.component';
import { AuthService } from './Services/auth.service';
import { AuthGuardService } from './Services/auth-guard.service';
import { UserService } from './Services/user.service';
import { NewProductFormComponent } from './admin/new-product-form/new-product-form.component';
import { CategotyService } from './Services/categoty.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    CategoriesComponent,
    AdminManageUsersComponent,
    NewProductFormComponent,
    ProductCardComponent,
    ProductFilterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    CustomFormsModule ,
    DataTablesModule
    
  ],
  providers: [
    AngularFireAuth,
    AuthService,
    AuthGuardService,
    UserService,
    CategotyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
