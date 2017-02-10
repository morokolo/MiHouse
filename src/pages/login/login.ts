import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';
// pages
import { TabsPage } from '../tabs/tabs';
// Providers
import { AuthService } from '../../providers/auth-service';
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
    public  _alertController:AlertController,
    public loadingCtrl: LoadingController
  ) { }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  onLogin(form: NgForm) {
    this.presentLoading('Logging in...');

    if (form.valid) {
      this._authService.login(form.value['username'], form.value['password'])
        .subscribe(
        data => {
          this.dismiss();
          this.navCtrl.push(TabsPage);
        },
        error => {
            this.dismiss();
            let alert = this._alertController.create({
              title: 'Login Failed!',
              subTitle: 'Please provide the correct login credentials.',
              buttons: ['OK']
            });
            alert.present();
        });
    }
  }

  dismiss() {
    this.loading.dismiss().catch(() => {
      return true;
    });
  }

  presentLoading(message) {
    this.loading = this.loadingCtrl.create({
      content: message
    });

    this.loading.present();
  }

}
