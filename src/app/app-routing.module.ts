import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from './Auth/auth.guard';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },


  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'product/new', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: 'products/edit/:id', component: ProductFormComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
