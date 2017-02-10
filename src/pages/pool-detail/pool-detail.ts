import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PoolDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pool-detail',
  templateUrl: 'pool-detail.html'
})
export class PoolDetailPage {

  section:any;
  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.section = this.navParams.get('section');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoolDetailPage');
  }

}
