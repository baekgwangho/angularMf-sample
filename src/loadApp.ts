import "zone.js";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { SampleModule } from './app/components/sample/sample.module';

if (environment.production) {
  enableProdMode();
}

const mount = ()=>{
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}


const mountSample = ()=>{
  platformBrowserDynamic().bootstrapModule(SampleModule)
    .catch(err => console.error(err));
}


export{mount, mountSample}
