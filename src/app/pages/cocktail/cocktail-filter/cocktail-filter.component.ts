import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {CocktailService} from '@pages/cocktail/cocktail.service';

@Component({
  selector: 'app-cocktail-filter',
  templateUrl: './cocktail-filter.component.html',
  styleUrls: ['./cocktail-filter.component.scss']
})
export class CocktailFilterComponent implements OnInit {

  public categoriesForm: FormGroup;

  constructor(public cocktailService: CocktailService) {
  }

  ngOnInit(): void {
    this.categoriesForm = new FormGroup({
        categories: new FormArray([])
      }
    );
    for (const category of this.cocktailService.categories.getValue()) {
      (<FormArray> this.categoriesForm.controls.categories).push(new FormControl(true));
    }
    this.cocktailService.getCocktailsByCategories(this.categoriesForm.value.categories);
  }


}
