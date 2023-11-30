import 'zone.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { SampleModule } from './app/components/sample/sample.module';

if (environment.production) {
  enableProdMode();
}

/**
 * 여러개의 angular사용시 아래 로직 사용
 * app.modules에서도 zone재사용
 *
 */
// declare const require: any;
// const ngVersion = require('../package.json').dependencies['@angular/core'];
// (window as any).plattform = (window as any).plattform || {};
// let platform = (window as any).plattform[ngVersion];
// if (!platform) {
//   platform = platformBrowser();
//   (window as any).plattform[ngVersion] = platform;
// }
// const mount = () => {
//   platform.bootstrapModule(AppModule, { ngZone: (window as any).ngZone }).catch((err: any) => console.error(err));
// };
//
// https://github.com/manfredsteyer/multi-framework-micro-frontend.git

const mount = ()=>{
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}


const mountSample = () => {
  platformBrowserDynamic().bootstrapModule(SampleModule)
    .catch(err => console.error(err));
};


export { mount, mountSample };
