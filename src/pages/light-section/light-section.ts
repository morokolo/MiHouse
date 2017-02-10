import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the LightSection page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-light-section',
  templateUrl: 'light-section.html'
})
export class LightSectionPage {

  section: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.section = this.navParams.get('section');
  }

  ionViewDidLoad() {
    // console.log(this.section);
  }

}
