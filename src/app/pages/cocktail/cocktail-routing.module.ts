import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CocktailComponent} from './cocktail.component';

const routes: Routes = [
  {
    path: '',
    component: CocktailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }
