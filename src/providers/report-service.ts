import { Injectable } from '@angular/core';

declare var pdfMake: any;

@Injectable()
export class ReportService {

    public reportData = {
        Date: new Date().toLocaleDateString("en-IE", { year: "numeric", month: "long", day: "numeric" }),
        Logo: 'data:image/jpeg;base64,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',
        District: 'HARRIS COUNTY MUNICIPAL UTILITY DISTRICT NO. 468',
        Rep: "Josh Fort",
        Email: "jfort@champhydro.com",
        Cell: "713-703-3516",
        Office: "281-445-2614",
        Fax: "281-445-2349",
        Address: "13226 Kaltenbrun ~ Houston, Texas 77086",
        NoMap: "data:image/jpeg;base64,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"

    }

    public createPdf(report) {
        return new Promise((resolve, reject) => {
            var dd = this.createDocumentDefinition(report);
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
                { image: this.reportData.Logo, alignment: 'center', width:300 },
                { text: 'Erosion Control Specialist since 1976', style: 'subheader',  margin: [0, 0, 0, 20] },
                { text: district.name, style: 'header' },

                { text: this.reportData.Date, alignment: 'center', style: 'header' },
                { image: district.map, alignment: 'center', width: 500, margin: [0, 0, 0, 20] },
                { text: this.reportData.Address, style: 'subheader' },

                { text: "Cell:" +  this.reportData.Cell + " ~ Office: " + this.reportData.Office + " ~ Fax: " + this.reportData.Fax, style: 'subheader' },
                { text: "Account Representattive: " + this.reportData.Rep + " ~ Email: " + this.reportData.Email, style: 'subheader' },
                );

            
            //PROJECTS - loop through all projects 
            for(let i=0; i<district.projects.length; i++){

                //Project Name
                projContent.push( 
                    { text: district.projects[i].name, style: 'header', pageBreak: 'before'},
                    );

                //Project Map
                if(district.projects[i].map){
                projContent.push(
                    { image: district.projects[i].map, alignment: 'center', width: 500, margin: [0, 0, 0, 20] });
                } else {
                    projContent.push(
                        { image: this.reportData.NoMap, alignment: 'center', width: 500, margin: [0, 0, 0, 20] });
                }


                projContent.push(
                    { ul: [
                        district.projects[i].bullet1,
                        district.projects[i].bullet2,
                        district.projects[i].bullet3
                    ],
                        pageBreak: 'after'
                    });

                if(district.projects[i].photo1) {
                    projContent.push({ image: district.projects[i].photo1, alignment: 'center', width: 500, margin: [0, 0, 0, 10] });
                }

                if(district.projects[i].photo2) {
                    projContent.push({ image: district.projects[i].photo2, alignment: 'center', width: 500, margin: [0, 0, 0, 10] });
                }
            }

            return projContent;
        };

        var dd = {
            content: getContent(),
            footer: function(currentPage, pageCount) { return currentPage.toString() + ' of ' + pageCount; },
            styles: {
                header: {
                    fontSize: 20,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 0, 0, 20]
                },
                subheader: {
                    fontSize: 16,
                    alignment: 'center',
                },
            },
        }

        return dd;
    }

}
