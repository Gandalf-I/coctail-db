import {Component, OnInit} from '@angular/core';
import {CocktailService} from '@pages/cocktail/cocktail.service';


@Component({
  selector: 'app-cocktail-content',
  templateUrl: './cocktail-content.component.html',
  styleUrls: ['./cocktail-content.component.scss']
})
export class CocktailContentComponent implements OnInit {

  constructor(public cocktailService: CocktailService) {
  }

  ngOnInit(): void {

  }

}
