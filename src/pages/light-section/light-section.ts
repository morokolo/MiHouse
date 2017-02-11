import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HomesService} from '../../providers/homes-service';
import {MessageHelper} from '../../providers/message-helper';

@Component({
  selector: 'page-light-section',
  templateUrl: 'light-section.html'
})
export class LightSectionPage {

  section: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _homesService: HomesService, public _messageHelper: MessageHelper) {
    this.section = this.navParams.get('section');
  }

  ionViewDidLoad() {
    // console.log(this.section);
  }

  toggleLights(section) {

    let message = section.name + ': ' + (section.status === 1 || section.status === true ? 'On' : 'Off');

    this._homesService.changeSectionLightsStatus(section, 'Loading...')
      .subscribe((data) => {
        // this.section = data;
        this._messageHelper.presentToast(message, 3000, 'bottom');
      },
      (err) => {
        this._messageHelper.presentToast(err.error, 3000, 'bottom');
      });
  }

  toggleLight(item) {
    let message = item.name + ': ' + (item.status === 1 || item.status === true ? 'On' : 'Off');

    this._homesService.changeSectionSingleLightsStatus(item, 'Loading...')
      .subscribe((data) => {
        // this.section = data;
        this._messageHelper.presentToast(message, 3000, 'bottom');
      },
      (err) => {
        this._messageHelper.presentToast(err.error, 3000, 'bottom');
      });
  }

}
