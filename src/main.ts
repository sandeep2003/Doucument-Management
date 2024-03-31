import { enableProdMode, isDevMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();

if (!isDevMode()) {
  console.assert = function() { };
  console.clear = function() { };
  console.count = function() { };
  console.countReset = function() { };
  console.debug = function() { };
  console.dir = function() { };
  console.dirxml = function() { };
  console.error = function() { };
  console.group = function() { };
  console.groupCollapsed = function() { };
  console.groupEnd = function() { };
  console.info = function() { };
  console.log = function() { };
  console.table = function() { };
  console.time = function() { };
  console.timeEnd = function() { };
  console.timeLog = function() { };
  console.timeStamp = function() { };
  console.trace = function() { };
  console.warn = function() { };
}

}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
