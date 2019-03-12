import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {LikeComponent} from './app/exercise.component';

let component = new LikeComponent(10, true);
component.onClick();
console.log('likesCount: ${component.likesCount},isSelected: ${component.isSelected}');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
