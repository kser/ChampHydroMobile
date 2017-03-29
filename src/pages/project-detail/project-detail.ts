import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, ActionSheetController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Project } from '../../models/project'

import { Camera } from 'ionic-native';


@Component({
  selector: 'page-project-detail',
  templateUrl: 'project-detail.html'
})
export class ProjectDetailPage {
  @ViewChild('fileInput') fileInput;

  selectedProject: Project;

  form: FormGroup;

  isReadyToSave: boolean;



  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public viewCtrl: ViewController, formBuilder: FormBuilder) {
    this.selectedProject = navParams.get('project');

    this.form = formBuilder.group({
      name: [this.selectedProject.name ],
      bullet1: ['', Validators.required],
      bullet2: [''],
      bullet3: [''],
      photo1: [''],
      photo2: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectDetailPage');
  }

  //PICTURE SELECTION
  presentActionSheet(photoNum) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(Camera.PictureSourceType.PHOTOLIBRARY, photoNum);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(Camera.PictureSourceType.CAMERA, photoNum);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  takePicture(sourceType, photoNum) {
    let cameraOptions = {
      sourceType: sourceType,
      destinationType: Camera.DestinationType.DATA_URL,      
      targetWidth: 300,
      targetHeight: 300,
      correctOrientation: true,
      // saveToPhotoAlbum: true
    }
    if (Camera['installed']()) {
      Camera.getPicture(cameraOptions)
      .then((data) => {
        if(photoNum === 1)
          this.form.patchValue({ 'photo1': 'data:image/jpg;base64,' +  data });
        else
          this.form.patchValue({ 'photo2': 'data:image/jpg;base64,' +  data });

      }, (err) => {
        alert('Unable to load photo');
      })
    } else {
        alert('Camera not available');
    }
  }



  
  
  //MODAL ACTIONS
  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the district, so return it
   * back to the presenter.
   */
  save() {
    if(!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
    // console.log(this.form.value);
  }

  }


