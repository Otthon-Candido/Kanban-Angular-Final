import { Cards } from '../build-card/card';
import { Names } from '../names/names';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: Cards[] | Names[]) {

    this.storage.setItem(key, JSON.stringify(value));
    }

  getNames(): Names[] {

     return (JSON.parse(this.storage.getItem('name')));
  }

  getCards(): Cards[] {

      return (JSON.parse(this.storage.getItem('card')));
  }

remove(key: string) {

    this.storage.removeItem(key);
}

}
