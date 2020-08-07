import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CocktailComponent} from '@pages/cocktail/cocktail.component';
import {CocktailModule} from '@pages/cocktail/cocktail.module';
import {CoreModule} from '@core/core.module';
import {BackendModule} from '@backend/backend.module';

@NgModule({
  declarations: [
    AppComponent,
    CocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CocktailModule,
    CoreModule,
    BackendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
