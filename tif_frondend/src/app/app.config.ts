import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), importProvidersFrom(HttpClientModule)]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
