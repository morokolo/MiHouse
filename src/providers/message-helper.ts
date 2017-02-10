import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the MessageHelper provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MessageHelper {

  constructor(public toastCtrl: ToastController) {
    return;
  }

  presentToast(message: string, period: number, position: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: period,
      position: position
    });
    toast.present();
  }
}
