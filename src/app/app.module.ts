import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagStyleDirective } from './Directives/imag-style.directive';
import { CalcdiscountPipe } from './pipes/calcdiscount.pipe';
import { ShadowDirective } from './Directives/shadow.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductPairentComponent } from './components/product-pairent/product-pairent.component';
import { ProducDetailsComponent } from './components/produc-details/produc-details.component';
import {HttpClientModule} from '@angular/common/http';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { ApiProductsComponent } from './components/api-products/api-products.component';
import { IntigratedFormComponent } from './components/user/intigrated-form/intigrated-form.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAdminComponent } from './components/product-admin/product-admin.component';
import { AdminComponent } from './components/admin/admin.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    NavigationComponent,
    ProductListComponent,
    ImagStyleDirective,
    CalcdiscountPipe,
    ShadowDirective,
    NotFoundComponent,
    ProductPairentComponent,
    ProducDetailsComponent,
    UserFormComponent,
    ApiProductsComponent,
    IntigratedFormComponent,
    LoginComponent,
    ProductAdminComponent,
    AdminComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
