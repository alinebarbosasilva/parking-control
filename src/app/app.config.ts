import {ApplicationConfig, LOCALE_ID, Provider} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {DateAdapter, MAT_DATE_LOCALE, NativeDateAdapter, provideNativeDateAdapter} from "@angular/material/core";
import {provideEnvironmentNgxMask} from "ngx-mask";
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

export function provideLocaleConfig(): Provider[] {
  return [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
    {
      provide: DateAdapter,
      useClass: NativeDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
  ];
}

export const appConfig: ApplicationConfig = {


  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()), provideNativeDateAdapter(), provideAnimationsAsync(), provideEnvironmentNgxMask(), provideLocaleConfig()]
};
