import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { District } from '../models/district';
import { DISTRICTS }  from '../mocks/mock-districts'

/*
  Generated class for the District provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DistrictService {
  districts: District[] = [];

  defaultDistrict: any = {
    id: 468, 
    name: "HC MUD 468", 
    mapImage: "assets/img/DistrictMaps/hc-mud-433-map.jpg", 
    numProjects: 1, 
    rojects: ["Vintage Southeast Detention Pond"]
  }
  
  
  constructor(public http: Http) {
    console.log('Hello District Provider');
  }

  getDistricts(): Promise<District[]> {
    return Promise.resolve(DISTRICTS);
  }

}
