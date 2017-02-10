import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LightSectionPage} from '../light-section/light-section';

@Component({
  selector: 'page-light',
  templateUrl: 'light.html'
})
export class LightPage {
  sections: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    this.sections = [
      {
        name: 'Kitchen',
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
      },
      {
        name: 'Dining Area',
        status: 0,
        lights: [
          {
            name: 'Main Light',
            status: 1
          }
        ]
      },
      {
        name: 'Living Room',
        status: 1,
        lights: [
          {
            name: 'Middle',
            status: 1
          }
        ]
      }
    ];
  }

  itemSelected(section) {
    this.navCtrl.push(LightSectionPage, { section: section });
  }

}
