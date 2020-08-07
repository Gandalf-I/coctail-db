import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ICocktailsCategory} from '@shared/interface/cocktails-category';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {CocktailService} from '@pages/cocktail/cocktail.service';

@Component({
  selector: 'app-cocktail-filter',
  templateUrl: './cocktail-filter.component.html',
  styleUrls: ['./cocktail-filter.component.scss']
})
export class CocktailFilterComponent implements OnInit {

  public categoriesForm: FormGroup;
  public categories: ICocktailsCategory[];

  constructor(public cocktailService: CocktailService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categories = this.route.snapshot.data.cocktail;
    this.categoriesForm = new FormGroup({
        categories: new FormArray([])
      }
    );
    for (const category of this.categories) {
      (<FormArray> this.categoriesForm.controls.categories).push(new FormControl(true));
    }
    this.cocktailService.getCocktailsByCategories(this.categoriesForm.value.categories);
  }


}
