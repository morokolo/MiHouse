import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
// pages
import { TabsPage } from '../tabs/tabs';
// Providers
import { AuthService } from '../../providers/auth-service';
import {MessageHelper} from '../../providers/message-helper';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _authService: AuthService,
    public _messageHelper: MessageHelper,
    public loadingCtrl: LoadingController
  ) { }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  onLogin(form: NgForm) {

    if (form.valid) {
      this._authService.login(form.value['username'], form.value['password'], 'Logging In...')
        .subscribe(
        (data) => {
          this.navCtrl.push(TabsPage);
        },
        (error) => {
          this._messageHelper.presentToast('Unable to login with provided credentials.', 3000, 'top');
        });
    }
  }
}
