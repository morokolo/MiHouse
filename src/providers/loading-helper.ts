import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()

export class LoadingHelper {

  loading;

  /**
   * Constructor for loading helper
   * @param loadingCtrl
   */
  constructor(
    public loadingCtrl: LoadingController,
  ) { }

  /**
   * Presents loading icon with message
   * @param message
   */
  create(message) {
    this.loading = this.loadingCtrl.create({
      content: message
    });

    this.loading.present();
  }

  /**
   * Dismisses loading message
   */
  dismiss() {
    this.loading.dismiss();
  }
}
