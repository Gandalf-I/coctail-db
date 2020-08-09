import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {concatMap, filter, mergeMap, toArray} from 'rxjs/operators';
import {BackendService} from '@backend/backend.service';
import {ICocktailByCategory} from '@shared/interface/cocktails-by-category';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {ICocktailsCategory} from '@shared/interface/cocktails-category';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktailByCategory: Observable<ICocktailByCategory[]>;
  public categories: BehaviorSubject<ICocktailsCategory[]> = new BehaviorSubject([]);

  constructor(private route: ActivatedRoute,
              private service: BackendService) {
  }

  public getCocktailsByCategories(categoryActive?: boolean[]): void {
    this.cocktailByCategory = this.service.cocktailApiService.getCocktailCategories().pipe(
      mergeMap(arr => {
        console.log(arr);
        return from(arr.map(value => value.strCategory));
      }),
      concatMap(data => {
        console.log(data, this.service.cocktailApiService.getCocktailsByCategory(data));
        return this.service.cocktailApiService.getCocktailsByCategory(data);
      }),
      filter((_, index) => categoryActive[index]),
      toArray());
  }

}
