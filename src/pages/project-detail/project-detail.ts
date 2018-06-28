import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ActionSheetController, FabContainer } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { Project } from '../../models/project'
import { ProjPage } from '../../models/project'
// import { Project } from '../../models/data-model';

// import { Camera } from 'ionic-native';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
    public camera: Camera) {

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
    this.setProjPages(this.selectedProject.pages);

    // Watch the form for changes, and
    this.projectForm.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.projectForm.valid;
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.projectForm.reset({
      name: this.selectedProject.name
    });
    this.setProjPages(this.selectedProject.pages);
  }

  get projPages(): FormArray{
    return this.projectForm.get('projPages') as FormArray;
  };

  setProjPages(pages: ProjPage[]) {
    const projPageFGs = pages.map(page => this.fb.group(page));
    const pageFormArray = this.fb.array(projPageFGs);
    this.projectForm.setControl('projPages', pageFormArray);
  }

  addProjPage(type, fab?: FabContainer): void {
    let newPage = new ProjPage();
    if(type == "panoramas") {
      newPage.type = "Panoramas";
      this.projPages.push(this.fb.group(newPage));
    } else if (type == "4photo") {
      newPage.type = "4-Photo";
      this.projPages.push(this.fb.group(newPage));
    } else if (type == "2photo") {
      newPage.type = "2-Photo";
      this.projPages.push(this.fb.group(newPage));
    }
    console.log(this.projPages);
    fab.close();
  }

  removePage(i: number) {
    // remove page from the list
    const control = <FormArray>this.projectForm.controls['projPages'];
    control.removeAt(i);
}


  //PICTURE SELECTION
  presentActionSheet(pageNum, photoNum) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, false, pageNum, photoNum);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA, true, pageNum, photoNum);
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

  testCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,     
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     console.log(base64Image);
    }, (err) => {
     // Handle error
    });
  }

  takePicture(sourceType, saveToAlbum, pageNum, photoNum) {

    let defaultPhoto = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';
    
    let cameraOptions: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      // saveToPhotoAlbum: saveToAlbum,     
      targetWidth: 500,
      targetHeight: 500,
      correctOrientation: true,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG
    }

    if (this.camera) {
      this.camera.getPicture(cameraOptions)
      .then((data) => {
        console.log("picture taken");
        if(photoNum === 1){
          this.projectForm.controls['projPages']['controls'][pageNum]['controls']['photo1'].patchValue('data:image/jpg;base64,' +  data);
        } else if (photoNum ===2 ) {
          this.projectForm.controls['projPages']['controls'][pageNum]['controls']['photo2'].patchValue('data:image/jpg;base64,' +  data);
        } else if(photoNum === 3){
          this.projectForm.controls['projPages']['controls'][pageNum]['controls']['photo3'].patchValue('data:image/jpg;base64,' +  data);
        } else if (photoNum ===4 ) {
          this.projectForm.controls['projPages']['controls'][pageNum]['controls']['photo4'].patchValue('data:image/jpg;base64,' +  data);
        }
      }, (err) => {
        // alert('Unable to load photo');
        if(photoNum === 1){
          this.projectForm.controls['projPages']['controls'][pageNum]['controls']['photo1'].patchValue(defaultPhoto);
        } else if (photoNum ===2 ) {
          this.projectForm.controls['projPages']['controls'][pageNum]['controls']['photo2'].patchValue(defaultPhoto);
        } else if(photoNum === 3){
          this.projectForm.controls['projPages']['controls'][pageNum]['controls']['photo3'].patchValue(defaultPhoto);
        } else if (photoNum ===4 ) {
          this.projectForm.controls['projPages']['controls'][pageNum]['controls']['photo4'].patchValue(defaultPhoto);
        }
        console.log("Problem Loading Photo");

      })
    } else {
        // alert('Camera not available');
        if(photoNum === 1){
          this.projectForm.controls['projPages']['controls'][pageNum]['controls']['photo1'].patchValue(defaultPhoto);
        } else if (photoNum ===2 ) {
          this.projectForm.controls['projPages']['controls'][pageNum]['controls']['photo2'].patchValue(defaultPhoto);
        } else if(photoNum === 3){
          this.projectForm.controls['projPages']['controls'][pageNum]['controls']['photo3'].patchValue(defaultPhoto);
        } else if (photoNum ===4 ) {
          this.projectForm.controls['projPages']['controls'][pageNum]['controls']['photo4'].patchValue(defaultPhoto);
        }
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


