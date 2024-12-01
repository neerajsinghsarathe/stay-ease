import {Component, Input, OnInit} from '@angular/core';
import {SpinnerModule} from 'primeng/spinner';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Place} from '../../models/place.model';
import {PerksComponent} from '../../helpers/perks/perks.component';
import {ToastService} from '../../helpers/toast/toast.service';
import {PhotosUploaderComponent} from '../../helpers/photos-uploader/photos-uploader.component';
import {AccountPageService} from '../account-page/account-page.service';

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
  addedPhotos: any[] = [];
  loading = false;
  id: string | null = null;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private accountService: AccountPageService
  ) {
    this.formData = this.fb.group({
      title: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', Validators.required],
      country: ['', Validators.required],
      description: ['', Validators.required],
      perks: [[]],
      price: [500, Validators.required],
      rating: [''],
      isActive: [true],
    });
  }

  ngOnInit(): void {
    if (this.place?._id) {
      this.loading = true;
      this.formData.patchValue(this.place);
      this.loading = false;
      this.addedPhotos = this.place.photos;
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
    console.log(this.addedPhotos);
    if (!this.isValidPlaceData()) {
      return;
    }

    const formData = {
      "hotelId": this.formData.value.hotelId || 0,
      "name": this.formData.value.title,
      "description": this.formData.value.description,
      "address": this.formData.value.address,
      "city": this.formData.value.city,
      "state": this.formData.value.state,
      "pinCode": this.formData.value.pinCode,
      "country": this.formData.value.country,
      "amenities": this.formData.value.perks.join(','),
      "rating": this.formData.value.rating,
      "ownerId": this.accountService.getOwnerId(),
      "isActive": this.formData.value.isActive,
    };

    console.log(formData);

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
