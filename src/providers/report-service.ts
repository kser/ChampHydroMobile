import { Injectable } from '@angular/core';
// import {pdfmake} from 'pdfmake';

declare var pdfMake: any;

@Injectable()
export class ReportService {

    public reportData = {
        Date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
        ShortDate: new Date().toLocaleDateString('en-US'),
        Rep: "Josh Fort",
        Email: "jfort@champhydro.com",
        Cell: "713-703-3516"
    }

    public buildPdf(district) {
        return new Promise((resolve, reject) => {
            var dd = this.createDocumentDefinition(district);
            //add font
            pdfMake.fonts = {
                // 'Gothic' : {
                //     normal: 'gothic.ttf',
                //     bold: 'gothic.ttf',
                //     italics: 'gothic.ttf',
                //     bolditalics: 'gothic.ttf'
                // },
                'TimesNewRoman': {
                    normal: 'times new roman.ttf',
                    bold: 'times new roman bold.ttf',
                    italics: 'times new roman italic.ttf',
                    bolditalics: 'times new roman bold italic.ttf'
                }
            }
            var pdf = pdfMake.createPdf(dd);

            pdf.getDataUrl((data) => {
                resolve(data);
            });

        });
    }


    private createDocumentDefinition(district) {


        var getContent = () => {
            let projContent = [];

            //Title Page
            projContent.push(
                { image: 'chl-logo-title.JPG', alignment: 'center', width:350, margin: [0,0,0,20] },
                // { text: 'Erosion Control Specialist since 1976', style: 'caption', margin: [0, 0, 0, 20] },
                { text: district.longName, style: 'header' },
                { text: 'Detention and Drainage Facilities Report', alignment: 'center', style: 'subheader' },
                { text: this.reportData.Date, alignment: 'center', style: 'subheader', margin: [0, 0, 0, 20] },
                { image: district.map, alignment: 'center', width: 550, margin: [0, 0, 0, 20] },

                { text: '13226 Kaltenbrun  ~  Houston, Texas  77086  ~  Phone: 281-744-9538  ~  Fax: 281-445-2349', style: 'info', margin: [0,0,0,10]},
                { text: "Account Representattive: " + this.reportData.Rep + "  ~ Email: " + this.reportData.Email, style: 'info' },
                );

            
            //PROJECTS - loop through all projects 
            for(let i=0; i<district.projects.length; i++){

                //Project Name
                projContent.push( 
                     { text: district.projects[i].name, style: 'header', pageBreak: 'before', margin: [0,30,0,20]},
                    );

                //Project Map
                if(district.projects[i].map){
                projContent.push(
                        { image: district.projects[i].map, alignment: 'center', width: 550, margin: [0, 0, 0, 20] }
                    );
                } else { //default to district map
                    projContent.push(
                        { image: district.map, alignment: 'center', width: 550, margin: [0, 0, 0, 20] }
                    );
                }

                //Bullet Point Comments
                // if(district.projects[i].bullet1 || district.projects[i].bullet2 || district.projects[i].bullet3) {
                                projContent.push(
                                    { ul: [
                                        {text: district.projects[i].bullet1, margin: [0, 0, 0, 10]},
                                        {text: district.projects[i].bullet2, margin: [0, 0, 0, 10]},
                                        {text: district.projects[i].bullet3, margin: [0, 0, 0, 10]}
                                    ],
                                        pageBreak: 'after'
                                    });
                            // }

                //Photos
                for(let j=0; j < district.projects[i].photos.length; j++){
                    // console.log("Photo: ", district.projects[i].photos[j].photo);
                    if(district.projects[i].photos[j].photo) {
                        projContent.push({ image: district.projects[i].photos[j].photo, alignment: 'center', width: 500, margin: [0, 0, 0, 10] });
                    }
                }

            }

            return projContent;
        };

        var dd = {
            content: getContent(),
            footer: (currentPage, pageCount) => { 
                return {
                    columns: [
                        {
                            alignment: 'left',
                            text: this.reportData.ShortDate,
                            margin: [20,0,0,0]
                        },
                        {
                            alignment: 'right',
                            text: "Page " + currentPage.toString() + ' of ' + pageCount,
                            margin: [0,0,20,0]
                        }
                    ]
                } 
            },
            defaultStyle: {
                font: 'TimesNewRoman'
            },
            styles: {
                header: {
                    fontSize: 20,
                    alignment: 'center',
                    margin: [0, 0, 0, 20]
                },
                subheader: {
                    fontSize: 18,
                    alignment: 'center',
                },
                info: {
                    fontSize: 12,
                    alignment: 'center',
                },
            },
        }

        return dd;
    }

}
