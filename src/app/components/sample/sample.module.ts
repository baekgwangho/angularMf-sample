import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleRoutingModule } from './sample-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    SampleRoutingModule,
  ],
  bootstrap: [SampleComponent],
  exports: [
    SampleComponent,
  ],
  // entryComponents: [SampleComponent]
})
export class SampleModule {}
