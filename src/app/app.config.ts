import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideTanStackQuery, QueryClient, withDevtools } from '@tanstack/angular-query-experimental';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(routes),
    provideTanStackQuery(new QueryClient(), withDevtools()),
    provideZoneChangeDetection({ eventCoalescing: true })
  ]
};
