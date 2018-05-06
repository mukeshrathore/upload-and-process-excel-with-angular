import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultipleFileUploadComponent } from './multiple-file-upload/multiple-file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { UsingNg2FileUploadComponent } from './using-ng2-file-upload/using-ng2-file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    MultipleFileUploadComponent,
    UsingNg2FileUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
