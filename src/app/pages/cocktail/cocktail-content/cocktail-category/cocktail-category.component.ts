import {Component, Input, OnInit} from '@angular/core';
import {ICocktailByCategory} from '@shared/interface/cocktails-by-category';

@Component({
  selector: 'app-cocktail-category',
  templateUrl: './cocktail-category.component.html',
  styleUrls: ['./cocktail-category.component.scss']
})
export class CocktailCategoryComponent implements OnInit {
  @Input()
  public category: ICocktailByCategory;
  constructor() { }

  ngOnInit(): void {
  }

}
