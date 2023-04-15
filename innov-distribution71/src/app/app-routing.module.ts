import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  { path: '', component:  CatalogComponent},
  { path: 'catalogs', component:  CatalogComponent},
  { path: 'home', component:  HomeComponent},
  { path: 'brands', component:  BrandComponent},
  { path: '**', component: HomeComponent }  // Wildcard route for a 404 page
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
