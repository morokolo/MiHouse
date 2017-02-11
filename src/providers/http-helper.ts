import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

// observable
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/timeout';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpHelper {

  loading: any;
  loadingActive: boolean = false;
  apikey: string;
  timeOut: number = 20 * 1000;

  constructor(
    public http: Http,
    public storage: Storage,
    public loadingCtrl: LoadingController
  ) { }

  /**
   * Handles external GET requests
   * @param url
   * @param data
   * @param loadMessage
   * @returns {Observable}
   */
  get(url, data, loadMessage: string) {
    return this.httpHelperRequester('GET', url, data, loadMessage);
  }

  /**
   * Handles external POST requests
   * @param url
   * @param data
   * @param loadMessage
   * @returns {Observable}
   */
  post(url, data, loadMessage: string) {
    return this.httpHelperRequester('POST', url, data, loadMessage);
  }

  /**
   * Handles all PUT requests
   * @param url
   * @param data
   * @param loadMessage
   * @returns {Observable}
   */
  put(url, data, loadMessage: string) {
    return this.httpHelperRequester('PUT', url, data, loadMessage);
  }

  /**
   * Handles all DELETE requests
   * @param url
   * @param loadMessage
   * @returns {Observable}
   */
  delete(url, loadMessage: string) {
    let data = {};
    return this.httpHelperRequester('DELETE', url, data, loadMessage);
  }

  /**
   * Handles all http request within app
   * @param action
   * @param url
   * @param data
   * @param loadingMessage
   * @returns {Observable}
   */
  httpHelperRequester(action, url, data, loadingMessage) {

    this.showLoading(loadingMessage);

    return Observable
      .from(this.storage.get('token'))
      .flatMap(
      (key) => {

        data.apikey = key;

        let headers = new Headers({
          'Content-Type': 'application/json',
          'token': key
        });

        let params: URLSearchParams = this.objToSearchParams(data);

        if (action === 'GET') {

          return this.http.get(url, { search: params });

        } else if (action === 'POST') {

          let options = new RequestOptions({ headers });
          return this.http.post(url, params, options);

        } else if (action === 'PUT') {

          let options = new RequestOptions({ headers });
          return this.http.put(url, params, options);

        } else if (action === 'DELETE') {

          return this.http.delete(url, { search: params });

        } else {

          return Observable.of('Invalid Request');

        }

      }
      )
      .map(
      (res) => {
        this.hideLoading();
        if (res.status === 204) {
          return 'No Content';
        } else if (res === 'Invalid Request') {
          return res;
        } else {
          let body = res.json();
          return body.data || {};
        }
      })
      .timeout(this.timeOut, new Error('timeout'))
      .catch(
      (err) => {

        this.hideLoading();
        return Observable.throw(err);

      });

  };

  showLoading(loadingMessage) {
    if (loadingMessage && loadingMessage !== '') {
      this.loadingActive = true;
      this.presentLoading(loadingMessage);
    }
  }

  hideLoading() {
    if (this.loading) {
      if (this.loading) {
        this.dismiss();
      }
      this.loadingActive = false;
    }
  }

  /**
   * Sets search parameters for requests
   * @param obj
   * @returns {URLSearchParams}
   */
  objToSearchParams(obj): URLSearchParams {
    let params: URLSearchParams = new URLSearchParams();
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        params.set(key, obj[key]);
      }
    }
    return params;
  }

  presentLoading(message) {
    this.loading = this.loadingCtrl.create({
      content: message
    });

    this.loading.present();
  }

  /**
   * Dismisses loading message
   */
  dismiss() {
    this.loading.dismiss().catch(() => {
      return true;
    });
  }

}
