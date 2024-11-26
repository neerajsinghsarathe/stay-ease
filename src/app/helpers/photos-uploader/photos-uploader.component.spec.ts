import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosUploaderComponent } from './photos-uploader.component';

describe('PhotosUploaderComponent', () => {
  let component: PhotosUploaderComponent;
  let fixture: ComponentFixture<PhotosUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosUploaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
