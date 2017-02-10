import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

// App pages
import {LoginPage} from '../login/login';
import { TravellerModePage } from '../traveller-mode/traveller-mode';

// App Providers
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _authService: AuthService,
    public _modalCtrl: ModalController
  ) { }

  ionViewDidLoad() {
    this._authService.getUsername().then((username) => {
      this.user = username;
    });
  }

  onLogout() {
    this._authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }
  setTravellerMode() {
    let modal = this._modalCtrl.create(TravellerModePage);
    modal.present();
  }
}
