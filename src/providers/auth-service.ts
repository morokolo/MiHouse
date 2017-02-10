import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { Http, Response, RequestOptions, Headers }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  HAS_LOGGED_IN = 'hasLoggedIn';


  constructor(
    public storage: Storage,
    public events: Events,
    public http: Http,
    public loadingCtrl: LoadingController
  ) { }

  login(usernameInput: string, passwordInput: string) {

    let url = 'http://userservice.staging.tangentmicroservices.com:80/api-token-auth/';

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
          return response;

        }
      },
      );

  }

  setUsername(username: string) {
    this.storage.set('username', username);
  }

  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }

  logout() {
    this.storage.clear();
  }


}
