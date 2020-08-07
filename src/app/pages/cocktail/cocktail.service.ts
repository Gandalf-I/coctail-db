import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, take} from 'rxjs/operators';
import {BackendService} from '@backend/backend.service';
import {ICocktailByCategory} from '@shared/interface/cocktails-by-category';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktailByCategory: ICocktailByCategory[];

  constructor(private route: ActivatedRoute,
              private service: BackendService) {
  }

  public getCocktailsByCategories(categoryActive: boolean[]): void {
    this.service.cocktailApiService.getCocktailCategories().pipe(
      map(data => {
        const categories = Object.values(data);
        const cocktails: ICocktailByCategory[] = [];
        for (const [i, category] of categories.entries()) {
          if (categoryActive[i]) {
            this.service.cocktailApiService.getCocktailsByCategory(category.strCategory).pipe(
              take(1))
              .subscribe(value => cocktails.push(value));
          }
        }
        return cocktails;
      })).subscribe(value => this.cocktailByCategory = value);
  }

}
