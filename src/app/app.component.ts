import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";


const URL = 'http://localhost:3000';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public fileString;
  // files: any;
  // constructor() {
  //   this.fileString;
  // }

  // changeListener($event): void {
  //   this.readThis($event.target);
  // }

  // readThis(inputValue: any): void {
  //   var file: File = inputValue.files[0];
  //   var myReader: FileReader = new FileReader();
  //   var fileType = inputValue.parentElement.id;
  //   // myReader.onloadend = function (e) {
  //   //   //myReader.result is a String of the uploaded file
  //   //   console.log(myReader.result);
  //   //   this.fileString = myReader.result;

  //   //   //fileString = myReader.result would not work, 
  //   //   //because it is not in the scope of the callback
  //   // }
  //   myReader.onloadend = (e) => {
  //     console.log('fileString: ', myReader.result);
  //     this.fileString = myReader.result;
  //   };

  //   myReader.readAsText(file);
  // }

  // setFiles(files: Array<any>) { this.files = files; }
  // constructor(private http: Http, private el: ElementRef) { }
  // upload() {
  //   let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
  //   console.log("iam+ " + inputEl);
  //   let fileCount: number = inputEl.files.length;
  //   let formData = new FormData();
  //   if (fileCount > 0) { // a file was selected
  //     for (let i = 0; i < fileCount; i++) {
  //       formData.append('photo', inputEl.files.item(i));
  //     }
  //     this.http
  //       .post(URL, formData).map((res: any) => res).subscribe(
  //         (success) => {
  //           alert(success._body);
  //         },
  //         (error) => alert(error)
  //       );

  //   }
  // }
}
