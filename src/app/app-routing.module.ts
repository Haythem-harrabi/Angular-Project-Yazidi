import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "residences", component: ResidencesComponentComponent},
  {path: "details/:id", component: DetailsComponent},
  {path: "login", component: LoginComponent},
  {path: "addproduct", component: AddProductComponent},
  ​{ path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
