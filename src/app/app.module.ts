import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { DistrictMasterPage } from '../pages/district-master/district-master';
import { DistrictDetailPage } from '../pages/district-detail/district-detail';
import { ProjectDetailPage } from '../pages/project-detail/project-detail';

import { DistrictService }  from '../providers/district.service';


@NgModule({
  declarations: [
    MyApp,
    DistrictMasterPage,
    DistrictDetailPage,
    ProjectDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DistrictMasterPage,
    DistrictDetailPage,
    ProjectDetailPage
  ],
  providers: [ DistrictService, {provide: ErrorHandler, useClass: IonicErrorHandler}, DistrictService]
})
export class AppModule {}
