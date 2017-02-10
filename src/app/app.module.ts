import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';

// App pages
import { LightPage } from '../pages/light/light';
import { PoolPage } from '../pages/pool/pool';
import { IrrigationPage } from '../pages/irrigation/irrigation';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { HealthPage } from '../pages/health/health';
import { LoginPage } from '../pages/login/login';

// Providers
import { AuthService } from '../providers/auth-service';

@NgModule({
  declarations: [
    MyApp,
    LightPage,
    PoolPage,
    IrrigationPage,
    TabsPage,
    SettingsPage,
    HealthPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LightPage,
    PoolPage,
    IrrigationPage,
    TabsPage,
    SettingsPage,
    HealthPage,
    LoginPage
  ],
  providers: [
    AuthService, Storage
  ]
})
export class AppModule { }
