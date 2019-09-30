import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NG ZORRO CONFIG
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { es_ES as localeZorro, NZ_I18N, NZ_ICONS } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import { default as localeEs } from '@angular/common/locales/es';
import { CoreModule } from './core/core.module';
registerLocaleData(localeEs, 'es');
const LOCALE_PROVIDERS = [
  { provide: LOCALE_ID, useValue: 'es' },
  { provide: NZ_I18N, useValue: localeZorro },
];
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    ...LOCALE_PROVIDERS,
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
