import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';


@Component({
  selector: 'app-using-ng2-file-upload',
  templateUrl: './using-ng2-file-upload.component.html',
  styleUrls: ['./using-ng2-file-upload.component.css']
})
export class UsingNg2FileUploadComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: URL });
  constructor() { }

  ngOnInit() {
  }

}
