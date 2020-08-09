import {Component, OnInit} from '@angular/core';
import {CocktailService} from '@pages/cocktail/cocktail.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  constructor(private cocktailService: CocktailService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cocktailService.categories.next(this.route.snapshot.data.cocktail);
  }

}
