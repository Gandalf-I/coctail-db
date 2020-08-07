import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailContentComponent } from './cocktail-content.component';

describe('CoctailContentComponent', () => {
  let component: CocktailContentComponent;
  let fixture: ComponentFixture<CocktailContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
