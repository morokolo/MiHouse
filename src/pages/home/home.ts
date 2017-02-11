import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//App providers
import {HomesService} from '../../providers/homes-service';

// App pages
import { TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homes: any;
  tabBarElement: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _homesService: HomesService,
    public storage: Storage) {
    if (document.querySelector('.tabbar')) {
      this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
  }

  ionViewWillEnter() {
    let elements = document.querySelectorAll('.tabbar');
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }

  ionViewDidLoad() {
    this._homesService.getHomes('loading...')
      .subscribe(
      (response) => {
        this.homes = response;
      },
      (error) => {
        console.log(error);
      });
  }

  itemSelected(home) {
    this.storage.set('currentHome', home);
    this.navCtrl.push(TabsPage);
  }
}
