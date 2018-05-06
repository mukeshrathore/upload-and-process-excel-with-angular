import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingNg2FileUploadComponent } from './using-ng2-file-upload.component';

describe('UsingNg2FileUploadComponent', () => {
  let component: UsingNg2FileUploadComponent;
  let fixture: ComponentFixture<UsingNg2FileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingNg2FileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingNg2FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
