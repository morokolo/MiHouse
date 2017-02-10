import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PoolDetailPage } from '../pool-detail/pool-detail';
@Component({
  selector: 'page-pool',
  templateUrl: 'pool.html'
})
export class PoolPage {

  sections: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.sections = [
      {
        name: 'Pool pump',
        status: 1,
        lights: [
          {
            name: 'Light 1',
            status: 1
          },
          {
            name: 'Light 2',
            status: 0
          }
        ]
      }
    ];
  }
  PoolDetails(section) {
    this.navCtrl.push(PoolDetailPage, { section: section });
  }

}
