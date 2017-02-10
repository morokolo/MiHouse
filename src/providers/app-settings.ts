import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AppSettings {

  constructor(
    public http: Http)
  {}

  public get AUTHENTICATION_BASE_URL(): string {
    // Using Mock me
    let url = 'http://mockme.org/mockme/D5057B39C286BF789E6AC4BC098F2CB1A5ACAB00/';

    return url;
  }

}
