import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Keys pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'keys'
})
@Injectable()
export class Keys {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: any, args: any[] = null): any {
    return Object.keys(value)//.map(key => value[key]);
  }
}
