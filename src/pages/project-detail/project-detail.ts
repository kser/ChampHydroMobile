import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ActionSheetController, FabContainer } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { Project } from '../../models/project'
// import { Project } from '../../models/data-model';

// import { Camera } from 'ionic-native';
import { Camera, CameraOptions } from '@ionic-native/camera';

export class ProjPage {
  type: string = '2-Photo';
  photo1: string = '';
  comment1: string = 'test comment';
  photo2: string = '';
  comment2:string = '';
}

@Component({
  selector: 'page-project-detail',
  templateUrl: 'project-detail.html'
})
export class ProjectDetailPage {

  selectedProject: Project;
  projectForm: FormGroup;

  isReadyToSave: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public actionSheetCtrl: ActionSheetController, 
    public viewCtrl: ViewController, 
    private fb: FormBuilder, 
    private camera: Camera) {

    this.selectedProject = navParams.get('project');
    this.createForm();

  }

    createForm() {
    this.projectForm = this.fb.group({
      name: [this.selectedProject.name],
      showMap: [this.selectedProject.showMap ],
      projPages: this.fb.array([])
    });

    //TODO: map array data here

    // Watch the form for changes, and
    this.projectForm.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.projectForm.valid;
    });
  }

  get projPages(): FormArray{
    return this.projectForm.get('projPages') as FormArray;
  };

  setProjPages(projPages: ProjPage[]) {
    const projPageFGs = projPages.map(projPage => this.fb.group(projPage));
    const projPageFormArray = this.fb.array(projPageFGs);
    this.projectForm.setControl('projPages', projPageFormArray);
  }

  addProjPage(fab?: FabContainer): void {
    this.projPages.push(this.fb.group(new ProjPage()));
    console.log(this.projPages);
    fab.close();
  }

  //PICTURE SELECTION
  presentActionSheet(photoNum) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, false, photoNum);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA, true, photoNum);
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
    
    let cameraOptions: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: saveToAlbum,     
      targetWidth: 700,
      targetHeight: 700,
      correctOrientation: true,
    }
    if (this.camera) {
      this.camera.getPicture(cameraOptions)
      .then((data) => {
        // this.projectForm.value.photos[photoNum].photo = 'data:image/jpg;base64,' +  data;
        this.projectForm.controls['photos']['controls'][photoNum]['controls']['photo'].patchValue('data:image/jpg;base64,' +  data);

      }, (err) => {
        // alert('Unable to load photo');
        //this.projectForm.controls['photos']['controls'][photoNum]['controls']['photo'].patchValue(defaultPhoto);
        console.log("Problem Loading Photo");

      })
    } else {
        // alert('Camera not available');
        // this.projectForm.value.photos[photoNum].photo = defaultPhoto; //patchValue({ 'photo': defaultPhoto });
        //this.projectForm.controls['photos']['controls'][photoNum]['controls']['photo'].patchValue(defaultPhoto);
        console.log("Camera not available");
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
    if(!this.projectForm.valid) { return; }
    this.viewCtrl.dismiss(this.projectForm.value);
    console.log(this.projectForm.value);
  }

}


