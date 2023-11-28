import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular15-mf-sample';

  constructor(private router: Router) {

  }


  onClick() {
    this.router.navigateByUrl('/sampleeeee')
  }

  goToSample3() {
    this.router.navigateByUrl('sample2')
  }

  goTo(path: string) {
    window.shell?.navigate?.(path);
    // this.router.navigateByUrl('con/**/tent')
  }
}
