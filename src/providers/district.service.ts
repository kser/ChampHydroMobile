import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { District } from '../models/district';

import { DISTRICTS } from '../mocks/mock-districts';

@Injectable()
export class DistrictService {
  districts: District[] = [];

  defaultDistrict: any = { 
    "id": "468", 
    "name": "HC MUD 468", 
    "districtMap": "assets/img/DistrictMaps/mud-468-map.jpg", 
    "projects": [
      {"name":"Vintage Southeast Detention Pond"}
      ] 
  };
  
  
  constructor(public http: Http) {
    let districts = DISTRICTS;

    for(let district of districts) {
       this.districts.push(new District(district));
     }

     console.log(this.districts);
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
    this.districts.push(district);
  }

  delete(district: District) {
    this.districts.splice(this.districts.indexOf(district), 1);
  }

}
