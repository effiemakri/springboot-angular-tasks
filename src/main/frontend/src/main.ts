import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/* This sets up the application, and boostraps the module AppModule */

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
