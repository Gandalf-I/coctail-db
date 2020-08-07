import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CocktailRoutingModule} from './cocktail-routing.module';
import {CocktailContentComponent} from './cocktail-content/cocktail-content.component';
import {CocktailFilterComponent} from './cocktail-filter/cocktail-filter.component';
import {CocktailService} from '@pages/cocktail/cocktail.service';
import {ReactiveFormsModule} from '@angular/forms';
import { CocktailCategoryComponent } from './cocktail-content/cocktail-category/cocktail-category.component';


@NgModule({
  declarations: [
    CocktailContentComponent,
    CocktailFilterComponent,
    CocktailCategoryComponent
  ],
  exports: [
    CocktailFilterComponent,
    CocktailContentComponent
  ],
    imports: [
        CommonModule,
        CocktailRoutingModule,
        ReactiveFormsModule
    ],
  providers: [CocktailService]
})
export class CocktailModule {
}
