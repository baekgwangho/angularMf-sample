import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Sample2Component } from './components/sample2/sample2.component';

@NgModule({

  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule

  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/angular'}],
  // entryComponents: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule{
  // constructor(private injector: Injector) {
  //   console.log('########');
  //   console.log(injector);
  //   const customElement = createCustomElement(AppComponent, { injector });
  //   customElements.define('angular-sample-test', customElement);
  // }
  //
  // ngDoBootstrap(): void {
  // }

}
