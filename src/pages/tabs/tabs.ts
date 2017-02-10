import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//App pages
import { LightPage } from '../light/light';
import { PoolPage } from '../pool/pool';
import { IrrigationPage } from '../irrigation/irrigation';
import { SettingsPage } from '../settings/settings';
import { HealthPage } from '../health/health';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // set the root pages for each tab
  tab1Root: any = LightPage;
  tab2Root: any = PoolPage;
  tab3Root: any = IrrigationPage;
  tab4Root: any = HealthPage;
  tab5Root: any = SettingsPage;

  mySelectedIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
