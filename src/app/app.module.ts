import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';


import { DistrictMasterPage } from '../pages/district-master/district-master';
import { DistrictDetailPage } from '../pages/district-detail/district-detail';
import { ProjectDetailPage } from '../pages/project-detail/project-detail';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { ViewPdf } from '../pages/view-pdf/view-pdf';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { SupportPage } from '../pages/support/support';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ReportSettingsPage } from '../pages/report-settings/report-settings';


import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { DistrictService }  from '../providers/district.service';
import { ReportService }  from '../providers/report-service';


@NgModule({
  declarations: [
    MyApp,
    DistrictMasterPage,
    DistrictDetailPage,
    ProjectDetailPage,
    ItemCreatePage,
    ViewPdf,
    UserDetailsPage,
    PdfViewerComponent,
    SupportPage,
    TutorialPage,
    ReportSettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DistrictMasterPage,
    DistrictDetailPage,
    ProjectDetailPage,
    ItemCreatePage,
    UserDetailsPage,
    ViewPdf,
    SupportPage,
    TutorialPage,
    ReportSettingsPage
  ],
  providers: [ DistrictService, Camera, StatusBar, SplashScreen, File, ReportService, SocialSharing, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
