import {Injectable} from '@angular/core';
import {CocktailApiService} from '@backend/apis/cocktail-api.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public readonly cocktailApiService: CocktailApiService) {
  }
}
