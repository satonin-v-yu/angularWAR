import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
// import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

// if (environment.production) {
    // enableProdMode();
//   }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

//End study Основы Angular