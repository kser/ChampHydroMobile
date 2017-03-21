import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { District } from '../models/district';

@Injectable()
export class DistrictService {
  districts: District[] = [];

  defaultDistrict: any = { 
    "id": "468", 
    "name": "HC MUD 468", 
    "districtMap": "assets/img/DistrictMaps/mud-468-map.jpg", 
    "numProjects": "1", 
    "projects": ["Vintage Southeast Detention Pond"] 
  };
  
  
  constructor(public http: Http) {
    let districts = [
      { "id": "468", "name": "HC MUD 468", "districtMap": "assets/img/DistrictMaps/mud-468-map.jpg", "numProjects": "1", "projects": ["Vintage Southeast Detention Pond"] },
      { "id": "158", "name": 'FBC MUD 158', "districtMap": "assets/img/DistrictMaps/mud-158-map.jpg", "numProjects": "3", "projects": ["River Run Drainage Channel", "River Run Lift Station", "River's Mist"] },
      { "id": "159", "name": 'FBC MUD 159', "districtMap": "assets/img/DistrictMaps/mud-159-map.jpg", "numProjects": "1", "projects": ["Oaks of Rosenberg"] },
      { "id": "167", "name": 'FBC MUD 167', "districtMap": "assets/img/DistrictMaps/mud-167-map.jpg", "numProjects": "2", "projects": ["Detention Pond 1", "Detention Pond 2"] },
      { "id": "374", "name": 'HC MUD 374', "districtMap": "assets/img/DistrictMaps/mud-374-map.jpg", "numProjects": "6", "projects": ["Channel A", "Drop Pool 1", "Drop Pool 2", "Channel B", "Mound Road Pond", "Channel C"] },
      { "id": "433", "name": 'HC MUD 433', "districtMap": "assets/img/DistrictMaps/mud-433-map.jpg", "numProjects": "6", "projects": ["IDC 1", "IDC 2", "IDC 3", "IDC 4", "IDC 5", "Drainage Channel Phase II"] },
      { "id": "106", "name": 'HC MUD 106', "districtMap": "assets/img/DistrictMaps/mud-106-map.jpg", "numProjects": "2", "projects": ["Commercial Mix Pond", "Eagle Springs North Channel"] },
      { "id": "290", "name": 'HC MUD 290', "districtMap": "assets/img/DistrictMaps/mud-290-map.jpg", "numProjects": "3", "projects": ["Eagle Springs", "Eagle Springs Detention Pond", "Williams Gully"] },
      { "id": "238", "name": 'HC MUD 238', "districtMap": "assets/img/DistrictMaps/mud-238-map.jpg", "numProjects": "5", "projects": ["Oakridge Detention Pond", "Barker's Crossing Pond", "Lake Ridge Pond", "Facilities", "Harris County Channels"] },
      { "id": "157", "name": 'HC MUD 157', "districtMap": "assets/img/DistrictMaps/mud-157-map.jpg", "numProjects": "1", "projects": ["FM 529 Retail center Detention Pond"] },
      { "id": "285", "name": 'HC MUD 285', "districtMap": "assets/img/DistrictMaps/mud-285-map.jpg", "numProjects": "4", "projects": ["New Forest Channel", "Carpenter's Landing", "Liberty Lakes", "New Forest Pond"] }
    ];

    for(let district of districts) {
       this.districts.push(new District(district));
     }
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
