import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
/*
  Generated class for the TravellerMode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-traveller-mode',
  templateUrl: 'traveller-mode.html'
})
export class TravellerModePage {

  sections:any;
  event:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _viewController:ViewController
  ) {}

  ionViewDidLoad() {

  this.event = {
      dayStart: '1990-02-19',
      timeStarts: '07:43',
      timeEnds: '06:00',
      dayEnds: '1990-02-20'
    };

    this.sections = [
      {
        name: 'Kitchen',
        status: 1,
        lights: [
          {
            name: 'Light 1',
            status: 1
          },
          {
            name: 'Light 2',
            status: 0
          }
        ]
      },
      {
        name: 'Dining Area',
        status: 0,
        lights: [
          {
            name: 'Main Light',
            status: 1
          }
        ]
      },
      {
        name: 'Living Room',
        status: 1,
        lights: [
          {
            name: 'Middle',
            status: 1
          }
        ]
      }
    ];
  }

  dismiss() {
    this._viewController.dismiss();
  }

}
