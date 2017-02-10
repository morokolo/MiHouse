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
        cat: 'Kitchen',
        lights: [
          {
            light1: 0,
            light2: 1
          }
        ]
      }
    ];
  }

  itemSelected(section) {
    this.navCtrl.push(LightSectionPage, { section: section });
  }

}
