import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './shared/components/auth/auth.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductDashComponent } from './shared/components/product-dash/product-dash.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
   {
    path: 'products',
    component: ProductDashComponent,
  },
  {
    path: 'signin',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
