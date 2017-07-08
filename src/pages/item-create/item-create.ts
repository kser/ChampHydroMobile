import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

// import { Camera } from 'ionic-native';
import { Camera, CameraOptions } from '@ionic-native/camera';

/*
  Generated class for the ItemCreatePage. used to create District and Project objects

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private formBuilder: FormBuilder, private camera:Camera) {
    this.form = formBuilder.group({
      map: [''],
      name: ['', Validators.required],
      // projects: this.formBuilder.array([
      //   this.initProject()
      // ])
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {

  }

  createItem(model) {
    console.log(model);
  }
  

  getMap() {
    let cameraOptions: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,      
      quality: 75,
      targetWidth: 96,
      targetHeight: 96,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }
    if (this.camera) {//['installed']()) {
      this.camera.getPicture(cameraOptions)
      .then((data) => {
        this.form.patchValue({ 'map': 'data:image/jpg;base64,' +  data });
      }, (err) => {
        // alert('Unable to load map');
        this.fileInput.nativeElement.click();
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let input = this.fileInput.nativeElement;
    console.log("input: ", input);

    var reader = new FileReader();
    reader.onload = (readerEvent) => {
      input.parentNode.removeChild(input);

      var imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'map': imageData });
    };

    console.log("files: ", event.target.files[0]);
    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    // console.log('url(' + this.form.controls['map'].value + ')');
    return 'url(' + this.form.controls['map'].value + ')'
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
  done() {
    if(!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
    // console.log(this.form.value);
  }
}
