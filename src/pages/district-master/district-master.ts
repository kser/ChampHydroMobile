import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { DistrictDetailPage } from '../district-detail/district-detail';
import { ItemCreatePage } from '../item-create/item-create';

import { District }   from '../../models/district';
import { DistrictService }  from '../../providers/district.service';

@Component({
  selector: 'page-district-master',
  templateUrl: 'district-master.html'
})
export class DistrictMasterPage {
  currentDistricts: District[];

  constructor(public navCtrl: NavController, public districtService: DistrictService, public modalCtrl: ModalController) {
    this.currentDistricts = this.districtService.query();
  }

  /**
   * The view loaded, let's query our districtService for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new district. This shows our DistrictCreatePage in a
   * modal and then adds the new district to our data source if the user created one.
   */
  addDistrict() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(district => {
      if (district) {
        this.districtService.add(district);
      }
    })
    addModal.present();
  }

  /**
   * Delete an district from the list of districts.
   */
  deleteDistrict(district) {
    this.districtService.delete(district);
  }

  /**
   * Navigate to the detail page for this district.
   */
  openDistrict(district: District) {
    this.navCtrl.push(DistrictDetailPage, {
      district: district
    });
  }
}
