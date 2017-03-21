import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DistrictDetailPage } from '../district-detail/district-detail';

import { District }   from '../../models/district';
import { DistrictService }  from '../../providers/district.service'

/*
  Generated class for the DistrictMaster page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
  selector: 'page-district-master',
  templateUrl: 'district-master.html'
})
export class DistrictMasterPage {
 
  districts: District[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public districtService: DistrictService) {}

  getDistricts(): void {
    this.districtService.getDistricts().then(districts => this.districts = districts);
  }


  openDistrict(district: District) {
    this.navCtrl.push(DistrictDetailPage, {
      district: district
    });
  }

  ionViewDidLoad() {
    this.getDistricts();
  }

}
