import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {AppSettings} from './app-settings';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomesService {

  constructor(
    public _appSettings: AppSettings,
    public http: Http,
    public storage: Storage) {
  }

  getHomes(): Observable<any> {
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
        return response.json();
      })
      .catch(
      (err) => {
        return err; // observable needs to be returned or exception raised
      });
  }

  getHomeLightSection(home): Observable<any> {
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
        return response.json();
      })
      .catch(
      (err) => {
        return err; // observable needs to be returned or exception raised
      });
  }
}
