import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


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

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public _authService: AuthService
  ) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  login(form: Object) {

    if (form['valid']) {
      console.log('submitting the login form here!!');
      this.navCtrl.setRoot(TabsPage);
    }

  }

}
