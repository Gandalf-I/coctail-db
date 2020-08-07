import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICocktailsCategory} from '@shared/interface/cocktails-category';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IDrinks} from '@shared/interface/drinks';
import {ICocktailByCategory} from '@shared/interface/cocktails-by-category';

@Injectable({
  providedIn: 'root'
})
export class CocktailApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public getCocktailCategories(): Observable<ICocktailsCategory[]> {
    return this.httpClient.get<IDrinks>('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').pipe(
      map(data => data.drinks));
  }

  public getCocktailsByCategory(category: string): Observable<ICocktailByCategory> {
    return this.httpClient.get<IDrinks>(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`).pipe(
      map(data => {
        return {categoryName: category, cocktails: data.drinks} as ICocktailByCategory;
      }));
  }

}
