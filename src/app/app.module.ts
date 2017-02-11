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
import { LightSectionPage } from '../pages/light-section/light-section';
import { IrrigationDetailPage } from '../pages/irrigation-detail/irrigation-detail';
import { PoolDetailPage } from '../pages/pool-detail/pool-detail';
import { TravellerModePage } from '../pages/traveller-mode/traveller-mode';

// Pipes
import {Keys} from '../pipes/keys';

// Providers
import { AuthService } from '../providers/auth-service';
import { LoadingHelper} from '../providers/loading-helper';
import {MessageHelper} from '../providers/message-helper';

@NgModule({
  declarations: [
    MyApp,
    LightPage,
    PoolPage,
    IrrigationPage,
    TabsPage,
    SettingsPage,
    HealthPage,
    LoginPage,
    LightSectionPage,
    IrrigationDetailPage,
    PoolDetailPage,
    TravellerModePage,
    Keys
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
    LoginPage,
    LightSectionPage,
    IrrigationDetailPage,
    PoolDetailPage,
    TravellerModePage
  ],
  providers: [
    AuthService, Storage, LoadingHelper, MessageHelper
  ]
})
export class AppModule { }
