import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {AppSettings} from './app-settings';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {LoadingHelper} from './loading-helper';

@Injectable()
export class HomesService {

  constructor(
    public _appSettings: AppSettings,
    public http: Http,
    public storage: Storage,
    public _loadingHelper: LoadingHelper,
  ) {
  }

  getHomes(): Observable<any> {
    this._loadingHelper.create('Loading...');

    let url = this._appSettings.BASE_URL + '/homes';

    return Observable
      .from(this.storage.get('token'))
      .flatMap((key) => {
        let headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + key
        });

        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
      })
      .map(
      (response) => {
        this._loadingHelper.dismiss();
        return response.json();
      })
      .catch(
      (err) => {
        this._loadingHelper.dismiss();
        return err; // observable needs to be returned or exception raised
      });
  }

  getHomeLightSection(home): Observable<any> {
    this._loadingHelper.create('Loading...');
    let url = this._appSettings.BASE_URL + '/homes/' + home.id;

    return Observable
      .from(this.storage.get('token'))
      .flatMap((key) => {
        let headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + key
        });

        let options = new RequestOptions({ headers: headers });

        return this.http.get(url, options);
      })
      .map(
      (response) => {
        this._loadingHelper.dismiss();
        return response.json();
      })
      .catch(
      (err) => {
        this._loadingHelper.dismiss();
        return err; // observable needs to be returned or exception raised
      });
  }
}
