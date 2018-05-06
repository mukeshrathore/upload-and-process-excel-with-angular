import { Component, OnInit } from "@angular/core";
import { RequestOptions, Http } from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-multiple-file-upload',
    templateUrl: './multiple-file-upload.component.html',
    styleUrls: ['./multiple-file-upload.component.css']
})
export class MultipleFileUploadComponent implements OnInit {
    constructor(private http: HttpClient) { }
    ngOnInit() { }

    fileChange(event): void {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            const file = fileList[0];

            const formData = new FormData();
            formData.append('file', file, file.name);

            // const header = new HttpHeaders();
            // It is very important le leave the Content-Type empty, if you set it to 'multipart/form-data' it will not work !
            // do not set headers.append('Content-Type', 'multipart/form-data');
            // header.append('Authorization', 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9');
            // const options = new RequestOptions({ headers: header });
            const httpOptions = {
                headers: new HttpHeaders({
                    // 'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9'
                })
            };
            this.http.post('https://api.mysite.com/uploadfile', formData, httpOptions)
                // .map(res => res.json())
                // .catch(error => Observable.throw(error))
                .pipe(
                    catchError(error => Observable.throw(error))
                )
                .subscribe(
                    data => console.log('success'),
                    error => console.log(error)
                );
        }
    }
}

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpErrorResponse } from '@angular/common/http/src/response';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Upload Multiple Files in Angular 4';

//   constructor (private httpService: HttpClient) {  }

//   myFiles:string [] = [];
//   sMsg:string = '';

//   ngOnInit () {  }

//   getFileDetails (e) {
//     //console.log (e.target.files);
//     for (var i = 0; i < e.target.files.length; i++) { 
//       this.myFiles.push(e.target.files[i]);
//     }
//   }

//   uploadFiles () {
//     const frmData = new FormData();
    
//     for (var i = 0; i < this.myFiles.length; i++) { 
//       frmData.append("fileUpload", this.myFiles[i]);
//     }
    
//     this.httpService.post('http://localhost:60505/api/fileupload/', frmData).subscribe(
//       data => {
//         // SHOW A MESSAGE RECEIVED FROM THE WEB API.
//         this.sMsg = data as string;
//         console.log (this.sMsg);
//       },
//       (err: HttpErrorResponse) => {
//         console.log (err.message);    // SHOW ERRORS IF ANY.
//       }
//     );
//   }
// }

// Template:
        // <input type="file" id="file" multiple 
        //     (change)="getFileDetails($event)">

        // <button (click)="uploadFiles()">Upload</button>
