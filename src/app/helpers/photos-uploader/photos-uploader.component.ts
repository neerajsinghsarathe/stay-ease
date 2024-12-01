import {Component, EventEmitter, Input, NgIterable, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from '@angular/common';
import {File} from 'node:buffer';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-photos-uploader',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './photos-uploader.component.html',
  styleUrl: './photos-uploader.component.css'
})
export class PhotosUploaderComponent implements OnInit{

  @Input() addedPhotos: any = [];
  @Output() photosChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  photos: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.photos = this.addedPhotos;
  }

  removePhoto(i: number) {
    this.photos.splice(i, 1);
    this.photosChange.emit(this.addedPhotos);
  }

  onFileChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    const files = target.files as FileList;
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photos.push({ imageUrl : e.target?.result, file: file});
      };
      reader.readAsDataURL(file);
    });
  }
}
