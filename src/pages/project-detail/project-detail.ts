import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { Project } from '../../models/project';

import { Camera } from 'ionic-native';

/*
  Generated class for the ProjectDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-project-detail',
  templateUrl: 'project-detail.html'
})
export class ProjectDetailPage {

  selectedProject: string;
  private imageSrc: string;
  imageURL

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedProject = navParams.get('project');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectDetailPage');
  }

  takePhoto() {
    Camera.getPicture().then((imageData) => {
      this.imageURL = imageData
    }, (err) => {
      console.log(err);
    });
  }

  openGallery(){
    let cameraOptions = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.FILE_URI,      
      quality: 75,
      targetWidth: 300,
      targetHeight: 300,
      encodingType: Camera.EncodingType.JPEG,      
      correctOrientation: true
    }
    
    Camera.getPicture(cameraOptions)
      .then(file_uri => this.imageSrc = file_uri, 
      err => console.log(err));
    }
  }


