import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { DistrictService }  from '../../providers/district.service';

import { District } from '../../models/district';
import { Project } from '../../models/project';

import { ProjectDetailPage }  from '../project-detail/project-detail';

/*
  Generated class for the DistrictDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-district-detail',
  templateUrl: 'district-detail.html'
})
export class DistrictDetailPage {

  selectedDistrict: District;
  projects: Project[];

  constructor(public navCtrl: NavController, navParams: NavParams, public modalCtrl: ModalController, public districtService: DistrictService) {
    this.selectedDistrict = navParams.get('district');
  }

  editProject(project: string) {
    let addModal = this.modalCtrl.create(ProjectDetailPage, {
      project: project
    });
    addModal.onDidDismiss(project => {
      if (project) {
        //this.districtService.add(district);
      }
    })
    addModal.present();
  }

  buildReport() {
    console.log(this.selectedDistrict);
  }

  ionViewDidLoad() {
    console.log(this.selectedDistrict);
  }

}
