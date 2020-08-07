import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailCategoryComponent } from './cocktail-category.component';

describe('CocktailCategoryComponent', () => {
  let component: CocktailCategoryComponent;
  let fixture: ComponentFixture<CocktailCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
