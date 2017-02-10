import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// App pages
import { HomePage } from '../pages/home/home';
import { LightPage } from '../pages/light/light';
import { PoolPage } from '../pages/pool/pool';
import { IrrigationPage } from '../pages/irrigation/irrigation';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { HealthPage } from '../pages/health/health';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LightPage,
    PoolPage,
    IrrigationPage,
    TabsPage,
    SettingsPage,
    HealthPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LightPage,
    PoolPage,
    IrrigationPage,
    TabsPage,
    SettingsPage,
    HealthPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
