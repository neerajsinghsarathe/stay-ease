import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-photos-uploader',
  standalone: true,
  imports: [],
  templateUrl: './photos-uploader.component.html',
  styleUrl: './photos-uploader.component.css'
})
export class PhotosUploaderComponent implements OnInit{

  @Input() addedPhotos: string[] = [];
  @Output() photosChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  /*onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (this.files.length < this.maxFiles) {
        this.uploadFile(file);
      }
    }
  }

  uploadFile(file: File): void {
    const formData = new FormData();
    formData.append('file', file);

    // Call your API endpoint to upload the file
    this.http.post<{ url: string }>('YOUR_API_URL', formData).subscribe({
      next: (response) => {
        this.files.push(file);
        this.uploadedUrls.push(response.url);
        this.filesUploaded.emit(this.uploadedUrls);
      },
      error: (err) => {
        console.error('File upload failed:', err);
      },
    });
  }

  removeFile(index: number): void {
    this.files.splice(index, 1);
    this.uploadedUrls.splice(index, 1);
    this.filesUploaded.emit(this.uploadedUrls);
  }*/

}
