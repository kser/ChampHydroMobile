import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { DistrictService }  from '../../providers/district.service';
import { ReportService }  from '../../providers/report-service';

import { District } from '../../models/district';
import { Project } from '../../models/project';

import { ProjectDetailPage }  from '../project-detail/project-detail';
import { ItemCreatePage }  from '../item-create/item-create';
import { ViewPdf }  from '../view-pdf/view-pdf';

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

  constructor(public navCtrl: NavController, navParams: NavParams, public modalCtrl: ModalController, public reportService: ReportService, public districtService: DistrictService) {
    this.selectedDistrict = navParams.get('district');
  }

  /**
   * Prompt the user to add a new district. This shows our DistrictCreatePage in a
   * modal and then adds the new district to our data source if the user created one.
   */
  addProject() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(project => {
      if (project) {
        this.selectedDistrict.addProject(project);
      }
    })
    addModal.present();
  }

  editProject(project: string) {
    let addModal = this.modalCtrl.create(ProjectDetailPage, {
      project: project
    });
    addModal.onDidDismiss(project => {
      if (project) {
        this.selectedDistrict.updateProject(project);
      }
    })
    addModal.present();
  }
  
  /**
   * Delete a project from the list of projects.
   */
  deleteProject(project) {
    this.selectedDistrict.removeProject(project);
  }


 /**
   * Call ReportService to build hte PDF report
   */
  buildReport() {
    // console.log(this.selectedDistrict);

    this.reportService.buildPdf(this.selectedDistrict, this.districtService.getUser())
      .then((pdf) => {
        // let blob = new Blob([pdf], { type: 'application/pdf' });
        let pdfUrl = { pdfUrl: pdf };  //URL.createObjectURL(blob) };
        let modal = this.modalCtrl.create(ViewPdf, pdfUrl);

        // console.log(pdfUrl);

        // Display the modal view
        modal.present();
      });
  }

  ionViewDidLoad() {
    //console.log(this.selectedDistrict);
  }

}
