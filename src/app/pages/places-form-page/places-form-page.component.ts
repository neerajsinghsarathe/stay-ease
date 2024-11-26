import {Component, Input, OnInit} from '@angular/core';
import {SpinnerModule} from 'primeng/spinner';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Place} from '../../models/place.model';
import {PerksComponent} from '../../helpers/perks/perks.component';
import {ToastService} from '../../helpers/toast/toast.service';
import {PhotosUploaderComponent} from '../../helpers/photos-uploader/photos-uploader.component';

@Component({
  selector: 'app-places-form-page',
  standalone: true,
  imports: [
    SpinnerModule,
    ReactiveFormsModule,
    PerksComponent,
    PhotosUploaderComponent
  ],
  templateUrl: './places-form-page.component.html',
  styleUrl: './places-form-page.component.css'
})
export class PlacesFormPageComponent implements OnInit {
  @Input() place?: Place;
  formData: FormGroup;
  addedPhotos: string[] = [];
  loading = false;
  id: string | null = null;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService
  ) {
    this.formData = this.fb.group({
      title: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required],
      perks: [[]],
      extraInfo: [''],
      checkIn: [''],
      checkOut: [''],
      maxGuests: [10, [Validators.required, Validators.min(1), Validators.max(10)]],
      price: [500, Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.place?._id) {
      this.loading = true;
      this.formData.patchValue(this.place);
      this.loading = false;
      // TODO: Get Data API call should be integrated with the service and the response should be handled
      /*this.http.get(`/places/${this.id}`).subscribe((response: any) => {
        const place = response.data.place;
        this.formData.patchValue(place);
        this.addedPhotos = place.photos;
        this.loading = false;
      });*/
    }
  }

  isValidPlaceData(): boolean {
    if (this.formData.invalid) {
      this.toastService.showError('Please fill all the required fields!');
      return false;
    } else if (this.addedPhotos.length < 5) {
      this.toastService.showError('Upload at least 5 photos!');
      return false;
    }
    return true;
  }

  savePlace(): void {
    if (!this.isValidPlaceData()) {
      return;
    }

    const placeData = { ...this.formData.value, addedPhotos: this.addedPhotos };

    if (this.id) {
      /*this.http.put('/places/update-place', { id: this.id, ...placeData }).subscribe(() => {
        this.redirect = true;
        this.router.navigate(['/account/places']);
      });*/

      // TODO: Update Data API call should be integrated with the service and the response should be handled

    } else {
     /* this.http.post('/places/add-places', placeData).subscribe(() => {
        this.redirect = true;
        this.router.navigate(['/account/places']);
      });*/

      // TODO: Add Data API call should be integrated with the service and the response should be handled

    }
  }
}
