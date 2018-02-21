import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ReportSettingsPage page.
 *
 * 
 */

@Component({
  selector: 'page-report-settings',
  templateUrl: 'report-settings.html',
})
export class ReportSettingsPage {

  reportDate : string;// = new Date().toISOString();

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.reportDate = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportSettingsPage');
  }

  closeModal() {
    let dateFormatted:string = new Date(this.reportDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    this.viewCtrl.dismiss(dateFormatted);
  }

}
