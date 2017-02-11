import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Response, RequestOptions, Headers }  from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {LoadingHelper} from './loading-helper';
import {AppSettings} from './app-settings';

@Injectable()
export class AuthService {

  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(
    public storage: Storage,
    public events: Events,
    public http: Http,
    public _loadingHelper: LoadingHelper,
    public _appSettings: AppSettings
  ) { }

  login(usernameInput: string, passwordInput: string, loadingMessage: string) {
    if (loadingMessage) {
      this._loadingHelper.create(loadingMessage);
    }

    let url = this._appSettings.BASE_URL + '/auth/login'

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(url, JSON.stringify({ username: usernameInput, password: passwordInput }), options)
      .map(
      (response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          this.storage.set(this.HAS_LOGGED_IN, true);
          this.storage.set('token', user.token);
          this.setUsername(usernameInput);
          this.events.publish('user:login');

          if (loadingMessage) {
            this._loadingHelper.dismiss();
          }
          return response;
        }
      })
      .catch(err => {
        if (loadingMessage) {
          this._loadingHelper.dismiss();
        }
        return err; // observable needs to be returned or exception raised
      });
  }

  setUsername(username: string) {
    this.storage.set('username', username);
  }

  getUsername() {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  getToken() {
    return this.storage.get('token').then((value) => {
      return value;
    });
  }

  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }

  logout() {
    this.storage.clear();
    this.events.publish('user:logout');
  }
}
