import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthService {

  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(
    public storage: Storage,
    public events: Events
  ) { }

  login(username: string, password: string) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
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
