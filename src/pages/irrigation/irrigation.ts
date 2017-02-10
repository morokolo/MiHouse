import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// Pages
import { IrrigationDetailPage } from '../irrigation-detail/irrigation-detail';
/*
  Generated class for the Irrigation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-irrigation',
  templateUrl: 'irrigation.html'
})
export class IrrigationPage {

  sections: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {


    this.sections = [
      {
        sectionName: 'Flowers',
        status: 1,
        details: [
          {
            waterLevel:'50ml',
            status: 1
          }
        ]
      },
      {
        sectionName: 'Side Flowers',
        status: 1,
        details: [
          {
            waterLevel:'50ml',
            status: 1
          }
        ]
      },
      {
        sectionName: 'Back Lawn',
        status: 1,
        details: [
          {
            waterLevel:'50ml',
            status: 1
          }
        ]
      },
      {
        sectionName: 'Front Lawn',
        status: 1,
        details: [
          {
            waterLevel:'50ml',
            status: 1
          }
        ]
      }
    ];
  }

  irrigationDetails(section) {
    this.navCtrl.push(IrrigationDetailPage, { section: section });
  }

}
