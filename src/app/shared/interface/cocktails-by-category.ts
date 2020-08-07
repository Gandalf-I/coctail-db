import {ICocktail} from './cocktail';

export interface ICocktailByCategory {
  categoryName: string;
  cocktails: ICocktail[];
}
