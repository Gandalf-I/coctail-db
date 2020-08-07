import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CocktailResolver} from '@pages/cocktail/cocktail.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      cocktail: CocktailResolver
    },
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/cocktail/cocktail.module').then((m) => m.CocktailModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
