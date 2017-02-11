import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LightSectionPage} from '../light-section/light-section';
import { ItemSliding } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//App pages
import {HomePage} from '../home/home';

//App providers
import {MessageHelper} from '../../providers/message-helper';

@Component({
  selector: 'page-light',
  templateUrl: 'light.html'
})
export class LightPage {

  sections: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _messageHelper: MessageHelper, public storage: Storage) {
    this.storage.get('currentHome').then((currentHome) => {
      this.getHomeLightSection(currentHome);
    });
  }

  getHomeLightSection(home) {
    console.log(home);
  }

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

  changeLightStatus(event: ItemSliding, section) {
    let percent = event.getSlidingPercent();

    let message = section.name + ': ' + (section.status === 0 ? 'On' : 'Off');

    if (Math.abs(percent) === 1) {
      this._messageHelper.presentToast(message, 3000, 'bottom');
      event.close();
    }
  }

  goBack() {
    this.navCtrl.setRoot(HomePage);
  }
}
