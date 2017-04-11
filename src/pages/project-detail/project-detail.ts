import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, ActionSheetController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { Project } from '../../models/project'

import { Camera } from 'ionic-native';


@Component({
  selector: 'page-project-detail',
  templateUrl: 'project-detail.html'
})
export class ProjectDetailPage {
  @ViewChild('fileInput') fileInput;

  selectedProject: Project;

  public form: FormGroup;

  isReadyToSave: boolean;



  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public viewCtrl: ViewController, private formBuilder: FormBuilder) {
    this.selectedProject = navParams.get('project');

    this.form = formBuilder.group({
      name: [this.selectedProject.name ],
      bullet1: [this.selectedProject.bullet1, Validators.required],
      bullet2: [this.selectedProject.bullet2],
      bullet3: [this.selectedProject.bullet3],
      photos: formBuilder.array([
        this.initPhoto()
      ])
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectDetailPage');
  }

  initPhoto() {
      // initialize our photo
      return this.formBuilder.group({
          photo: ['']
      });
  }

  addPhoto() {
    // add photo to the list
    const control = <FormArray>this.form.controls['photos'];
    control.push(this.initPhoto());
  }

  removePhoto(i: number) {
      // remove photo from the list
      const control = <FormArray>this.form.controls['photos'];
      control.removeAt(i);
  }

  //PICTURE SELECTION
  presentActionSheet(photoNum) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(Camera.PictureSourceType.PHOTOLIBRARY, false, photoNum);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(Camera.PictureSourceType.CAMERA, true, photoNum);
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

  takePicture(sourceType, saveToAlbum, photoNum) {
    let cameraOptions = {
      sourceType: sourceType,
      destinationType: Camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: saveToAlbum,     
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


