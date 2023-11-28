import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { MyCounterComponent } from './components/my-counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({

  declarations: [
    AppComponent,
    MyCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 200,
    }),

  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/angular' }],
  // entryComponents: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {

  /**
   * 여러개의 angular mf로 사용시 zone 재사용
   */
  // constructor(private ngZone: NgZone) {
  //   (window as any).ngZone = this.ngZone;
  // }

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
