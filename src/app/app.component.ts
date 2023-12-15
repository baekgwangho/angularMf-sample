import { Component, Input, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';



@Component({
  selector: 'sample-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  @Input() event: any;
  title = 'angular15-mf-sample';

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    window.addEventListener('locationchange', (e) => {
      console.log('locationchange');
    });


  }


  onClick() {
    this.router.navigateByUrl('/sampleeeee');

  }

  goToSample3() {
    this.router.navigateByUrl('sample2');
  }

  setHistory(path: string) {
    console.log('setHistory');
    console.log('setHistory');
    window.history.pushState({}, '', path);
    // const navEvent = new PopStateEvent('popstate');
    // window.dispatchEvent(navEvent);
  }

  goTo(e: Event, path: string) {

    // this.setHistory(path);

    // e.preventDefault();
    // window.location.href = path;

    // window.dispatchEvent(this.event);

    this.keRouterEvent(path, e);

    // const evt = new CustomEvent('customClick', { detail: { state: 'angular', path }, bubbles: false });
    // window.dispatchEvent(evt);


    // window.shell?.navigate?.(path);
    // this.router.navigateByUrl('con/**/tent')
  }


  keRouterEvent(path: string, event?: any) {
    // var isKeRouterEventSupported = (typeof window.CustomEvent === 'function' && (new window.CustomEvent('keRouterEvent') as unknown) instanceof CustomEvent);
    // const isKeRouterEventSupported = (typeof window.CustomEvent === 'function' && typeof new window.CustomEvent('keRouterEvent') === 'object' as any);
    // console.log('isKeRouterEventSupported');
    // console.log(isKeRouterEventSupported);
    // if (isKeRouterEventSupported) {
    //   console.log('yyyyy');
    //   console.log('yyyyy');
    //   console.log('yyyyy');
    //   console.log('yyyyy');
    //   console.log('yyyyy');
    // }
    // const evt = new CustomEvent('keRouterEvent', { detail: { state: 'angular', path, event }, bubbles: false });
    // window.dispatchEvent(evt);
    window.routerEventChannel.emit('keRouterNavigator', {path,event});

  }


  goTo2(e: Event, path: string) {
    // e.preventDefault();
    window.history.pushState({}, '', path);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);

    // window.shell?.navigate?.(path);
    // this.router.navigateByUrl('con/**/tent')
  }
}


export const customRoute = (path: string) => {
  if (window.CustomEvent && typeof window.CustomEvent === 'function') {
    var event = new CustomEvent('customClick');
    if (event instanceof CustomEvent) {
      console.log('CustomEvent가 지원됩니다.');
    } else {
      // window.location.href = path;
      console.log('CustomEvent가 지원되지 않습니다.');
    }
  } else {
    console.log('CustomEvent가 지원되지 않습니다.');
    // window.location.href = path;
  }
};
