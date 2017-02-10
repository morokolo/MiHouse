import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';
//App pages
import { LoginPage } from '../pages/login/login';
import { TabsPage} from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

  constructor(public platform: Platform, public storage: Storage) {

    // Check if the user has already seen the tutorial
    this.storage.get('hasLoggedIn')
      .then((hasLoggedIn) => {
        if (hasLoggedIn) {
          this.rootPage = TabsPage;
        } else {
          this.rootPage = LoginPage;
        }
        this.platformReady()
      })
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      Splashscreen.hide();
    });
  }
}
