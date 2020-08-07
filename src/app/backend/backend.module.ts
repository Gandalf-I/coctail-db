import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApisModule} from './apis/apis.module';
import {BackendService} from './backend.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApisModule
  ],
  providers: [
    BackendService
  ]
})
export class BackendModule {
}
