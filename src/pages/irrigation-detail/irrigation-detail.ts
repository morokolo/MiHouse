import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the IrrigationDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-irrigation-detail',
  templateUrl: 'irrigation-detail.html'
})
export class IrrigationDetailPage {


  section: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.section = this.navParams.get('section');
    console.log('this.section', this.section);
  }

}
