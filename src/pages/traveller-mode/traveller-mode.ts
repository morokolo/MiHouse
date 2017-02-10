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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _viewController:ViewController
  ) {}

  ionViewDidLoad() {

  }

  dismiss() {
    this._viewController.dismiss();
  }

}
