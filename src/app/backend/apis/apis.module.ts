import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CocktailApiService} from './cocktail-api.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CocktailApiService,
  ]
})
export class ApisModule {
}
