import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController  } from 'ionic-angular';

import { DistrictService }  from '../../providers/district.service';
import { ReportService }  from '../../providers/report-service';

import { District } from '../../models/district';
import { Project } from '../../models/project';

import { ProjectDetailPage }  from '../project-detail/project-detail';
import { ReportSettingsPage }  from '../report-settings/report-settings';
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
  user: any;
  reportDate: String;

  constructor(public navCtrl: NavController, navParams: NavParams, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public reportService: ReportService, public districtService: DistrictService) {
    this.selectedDistrict = navParams.get('district');
    this.user = districtService.getUser();
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
        console.log(this.selectedDistrict);
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
   * Call ReportService to build the PDF report
   */
  openSettingsModal() {

    let dateModal = this.modalCtrl.create(ReportSettingsPage);

    dateModal.onDidDismiss(date => {
      if(date){
        this.reportDate = date;
        this.buildReport();
      }
      
    });

    dateModal.present();
  }

 /**
   * Call ReportService to build the PDF report
   */
  buildReport() {

    let loader = this.loadingCtrl.create({
      content: 'Building Report...'
    });

    loader.present().then(() => {
      this.reportService.buildPdf(this.selectedDistrict, this.districtService.getUser(), this.reportDate)
        .then((pdf) => {
          let pdfUrl = { pdfUrl: pdf };  
          let modal = this.modalCtrl.create(ViewPdf, pdfUrl);

          // Display the modal view
          modal.present();

          loader.dismiss();

      });
    });   
  }

  ionViewDidLoad() {
  }

}
