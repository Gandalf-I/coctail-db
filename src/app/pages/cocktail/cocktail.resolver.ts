import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BackendService} from '@backend/backend.service';

@Injectable({ providedIn: 'root' })
export class CocktailResolver implements Resolve<any> {
  constructor(private service: BackendService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.cocktailApiService.getCocktailCategories();
  }
}
