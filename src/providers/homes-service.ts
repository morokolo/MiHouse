import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import {HttpHelper} from './http-helper';
import {AppSettings} from './app-settings';

@Injectable()
export class HomesService {

  constructor(
    public _httpHelper: HttpHelper,
    public _appSettings: AppSettings) {
  }

  getHomes() {
    let url = this._appSettings.BASE_URL + '/api/homes';

    return this._httpHelper.get(url, {}, 'Loading...')
      .map((response) => {
        return response.json();
      })
      .catch(err => {
        return err; // observable needs to be returned or exception raised
      });
  }
}
