import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sample2Component } from './sample2.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    Sample2Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: Sample2Component,
    }]),
  ],
  exports: [
    Sample2Component,
  ],

})
export class Sample2Module {
  // constructor(private injector: Injector) {
  //   const customElement = createCustomElement(Sample2Component, { injector });
  //   customElements.define('app-sample2-test', customElement);
  // }
  //
  // ngDoBootstrap() {
  // }
}
