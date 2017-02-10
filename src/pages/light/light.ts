import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LightSectionPage} from '../light-section/light-section';
import { ItemSliding } from 'ionic-angular';

//App providers
import {MessageHelper} from '../../providers/message-helper';

@Component({
  selector: 'page-light',
  templateUrl: 'light.html'
})
export class LightPage {
  sections: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _messageHelper: MessageHelper) { }

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

  repairSelected(section) {
    console.log(section);
  }

  changeLightStatus(event, section) {
    let percent = event.getSlidingPercent();

    let message = section.name + ': ' + section.status;

    if (Math.abs(percent) === 1) {
      console.log(section);
      this._messageHelper.presentToast(message, 3000, 'bottom');
    }
  }

}
