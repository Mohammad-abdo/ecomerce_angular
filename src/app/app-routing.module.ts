import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductPairentComponent } from './components/product-pairent/product-pairent.component';
import { ProducDetailsComponent } from './components/produc-details/produc-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { ApiProductsComponent } from './components/api-products/api-products.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAdminComponent } from './components/product-admin/product-admin.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
{  path:'',redirectTo:'parent' ,pathMatch:'full'},
{  path:'products',component:ProductListComponent},
{  path:'parent',component:ProductPairentComponent,title:"Home Page",children:[]},
{  path:'product/:id',component:ProducDetailsComponent ,title:"singl product"},
{  path:'home',component:HomeComponent},
{  path:'login',component:LoginComponent},
{  path:'DashpordAdmin',component:ProductAdminComponent},
{  path:'Admin',component:AdminComponent},
{  path:'signup',component:ApiProductsComponent},
{  path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
