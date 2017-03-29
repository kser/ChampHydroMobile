import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
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



  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder) {
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

  getPicture() {
    let cameraOptions = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.DATA_URL,      
      // quality: 75,
      targetWidth: 300,
      // targetHeight: 300,
      encodingType: Camera.EncodingType.JPEG,      
      correctOrientation: true
    }
    if (Camera['installed']()) {
      Camera.getPicture(cameraOptions)
      .then((data) => {
        this.form.patchValue({ 'photo1': 'data:image/jpg;base64,' +  data });
      }, (err) => {
        alert('Unable to load map');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let input = this.fileInput.nativeElement;

    var reader = new FileReader();
    reader.onload = (readerEvent) => {
      input.parentNode.removeChild(input);

      var imageData = (readerEvent.target as any).result;

      this.form.patchValue({ 'photo1': imageData });
      // this.form.patchValue({ 'photo2': imageData });

    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getPhotoImageStyle() {
    return 'url(' + this.form.controls['photo1'].value + ')'
  }

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


