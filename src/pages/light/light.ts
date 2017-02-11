import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LightSectionPage} from '../light-section/light-section';
import { ItemSliding } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//App pages
import {HomePage} from '../home/home';

//App providers
import {MessageHelper} from '../../providers/message-helper';
import {HomesService} from '../../providers/homes-service';

@Component({
  selector: 'page-light',
  templateUrl: 'light.html'
})
export class LightPage {

  sections: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _messageHelper: MessageHelper,
    public storage: Storage,
    public _homesService: HomesService) {
    this.storage.get('currentHome').then((currentHome) => {
      this.getHomeLightSection(currentHome);
    });
  }

  getHomeLightSection(home) {
    this._homesService.getHomeLightSection(home)
      .subscribe((data) => {
        this.sections = data;
      }, (error) => {
        console.log(error);
      });
  }

  ionViewDidLoad() {

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
