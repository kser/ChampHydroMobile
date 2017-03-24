import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { District } from '../models/district';
// import { Project } from '../models/project';

import { DISTRICTS } from '../mocks/mock-districts';

@Injectable()
export class DistrictService {
  districts: District[] = [];

  defaultDistrict: any = {  
    name: "HC MUD 468", 
    map: "assets/img/DistrictMaps/mud-468-map.jpg", 
    projects: [
      {name:"Vintage Southeast Detention Pond"}
      ] 
  };
  
  
  constructor(public http: Http) {
    this.districts=DISTRICTS;
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
