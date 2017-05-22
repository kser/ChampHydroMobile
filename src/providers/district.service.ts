import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { District } from '../models/district';
// import { Project } from '../models/project';

import { DISTRICTS } from '../mocks/mock-districts';

@Injectable()
export class DistrictService {
  districts: District[] = [];
  user: any = {name: "", email: ""};
  
  constructor(public storage: Storage) {
    this.districts=DISTRICTS;

    //get user info from storage
    this.storage.get('user').then((user) => {
      this.user = user; 
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
  }

  delete(district: District) {
    this.districts.splice(this.districts.indexOf(district), 1);
  }

}
