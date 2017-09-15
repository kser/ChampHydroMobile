import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { District } from '../models/district';

import { JOSH_DISTRICTS } from '../mocks/josh-districts';
import { JERRY_DISTRICTS } from '../mocks/jerry-districts';
import { MIKE_DISTRICTS } from '../mocks/mike-districts';
import { PHIL_DISTRICTS } from '../mocks/phil-districts';


@Injectable()
export class DistrictService {
  districts: District[] = [];
  user: any = {name: "", email: ""};
  
  constructor(public storage: Storage) { }

  load() {
    this.districts=JOSH_DISTRICTS.concat(JERRY_DISTRICTS).concat(MIKE_DISTRICTS).concat(PHIL_DISTRICTS);
    this.orderDistricts();
    // this.districts.concat(JERRY_DISTRICTS);
    // this.storage.get('districts').then((districts) => {
    //   if(districts) this.districts = districts;
    // });

    // get user info from storage
    this.storage.get('user').then((user) => {
      if(user) this.user = user;
      // console.log('User: ', user)
    });
  }

  orderDistricts() {
    this.districts.sort((a, b) => {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    });
  }

  getUser() {
    return this.user;
  }

  saveUser(user) {
    this.user = user;
    // let newUser = JSON.stringify(user);
    this.storage.set('user', user);
  }

  saveDistricts() {
    this.storage.set('districts', this.districts);
  }

  query(params?: any) {
    if(!params) {
      return this.districts;
    }

    return this.districts.filter((district) => {
      for(let key in params) {
        let field = district[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return district;
        } else if(field == params[key]) {
          return district;
        }
      }
      return null;
    });
  }

  add(district: District) {
    this.districts.push(new District(district.name, district.map));
    // this.saveDistricts();
  }

  delete(district: District) {
    this.districts.splice(this.districts.indexOf(district), 1);
    // this.saveDistricts();
  }

}
