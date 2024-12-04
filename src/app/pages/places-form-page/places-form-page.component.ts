import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Place} from '../../models/place.model';
import {PerksComponent} from '../../helpers/perks/perks.component';
import {ToastService} from '../../helpers/toast/toast.service';
import {PhotosUploaderComponent} from '../../helpers/photos-uploader/photos-uploader.component';
import {AccountPageService} from '../account-page/account-page.service';
import {DropdownChangeEvent, DropdownModule} from 'primeng/dropdown';
import {RoomsComponent} from '../../helpers/rooms/rooms.component';
import {SpinnerComponent} from '../../helpers/spinner/spinner.component';

@Component({
  selector: 'app-places-form-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PerksComponent,
    PhotosUploaderComponent,
    DropdownModule,
    RoomsComponent,
    SpinnerComponent
  ],
  templateUrl: './places-form-page.component.html',
  styleUrl: './places-form-page.component.css'
})
export class PlacesFormPageComponent implements OnInit {
  @Input() place?: Place;
  @Input() countries: any[] = [];
  @Input() states: any[] = [];
  @Input() cities: any[] = [];
  @Input() zipCodes: any[] = [];
  @Output() isSubmittedChange = new EventEmitter<boolean>();
  formData: FormGroup;
  addedPhotos: any[] = [];
  loading = false;
  id: string | null = null;
  isSubmitted: boolean = false;
  submissionType: string | undefined;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private accountService: AccountPageService
  ) {
    this.formData = this.fb.group({
      hotelId: [0],
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
      rooms: this.fb.array([]),
      isActive: [true],
    });
  }

  ngOnInit(): void {
    if (this.place?._id) {
      this.submissionType = 'Update';
      this.loading = true;
      this.formData.patchValue(this.place);
      this.formData.get('hotelId')?.setValue(this.place._id);
      this.formData.get('country')?.setValue(this.countries.find((country) => country.countryCode === this.place?.country));
      this.formData.get('state')?.setValue(this.states.find((state) => state.stateCode === this.place?.state));
      this.formData.get('city')?.setValue(this.cities.find((city) => city.cityName === this.place?.city));
      this.formData.get('pinCode')?.setValue(this.zipCodes.find((zipCode) => zipCode.pinCode === this.place?.pinCode));
      this.accountService.getRoomsByPlace(this.place._id).subscribe((response: any) => {
        const rooms = response.data;
        if (rooms.length > 0) {
          rooms.forEach((room: any) => {
            (this.formData.get('rooms') as FormArray).push(new FormGroup({
              roomId: new FormControl(room.roomId),
              roomType: new FormControl(room.roomType, Validators.required),
              price: new FormControl(room.price, Validators.required),
              capacity: new FormControl(room.capacity, Validators.required),
              roomDescription: new FormControl(room.roomDescription, Validators.required),
              isActive: new FormControl(room.isActive),
              totalAvailableRooms: new FormControl(room.totalAvailableRooms ?? 1),
            }));
          });
        } else {
          (this.formData.get('rooms') as FormArray).push(new FormGroup({
            roomId: new FormControl(''),
            roomType: new FormControl('', Validators.required),
            price: new FormControl('', Validators.required),
            capacity: new FormControl('', Validators.required),
            roomDescription: new FormControl('', Validators.required),
            isActive: new FormControl(true),
          }));
        }
        this.loading = false;
      });
      this.addedPhotos = this.place.photos;
    } else {
      this.submissionType = 'Add';
      (this.formData.get('rooms') as FormArray).push(new FormGroup({
        roomId: new FormControl(0),
        roomType: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        capacity: new FormControl('', Validators.required),
        roomDescription: new FormControl('', Validators.required),
        isActive: new FormControl(true),
        totalAvailableRooms: new FormControl(1),
      }));
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
    if (!this.isSubmitted) return;

    if (!this.isValidPlaceData()) {
      return;
    }

    const formData = new FormData();
    formData.append('hotelId', this.formData.value.hotelId || 0);
    formData.append('name', this.formData.value.title);
    formData.append('description', this.formData.value.description);
    formData.append('address', this.formData.value.address);
    formData.append('city', this.formData.value.city.cityName);
    formData.append('state', this.formData.value.state.stateCode);
    formData.append('pinCode', this.formData.value.pinCode.pinCode);
    formData.append('country', this.formData.value.country.countryCode);
    formData.append('amenities', this.formData.value.perks.join(','));
    formData.append('rating', this.formData.value.rating);
    formData.append('ownerId', this.accountService.getOwnerId());
    formData.append('isActive', this.formData.value.isActive);
    formData.append('rooms', JSON.stringify(this.formData.value.rooms));
    formData.append('price', this.formData.value.price);
    if (this.submissionType !== 'Update') {
      this.addedPhotos.forEach((photo) => {
        if (photo.file !== null) {
          formData.append(`imageFiles`, photo.file);
        }
      });
    } else {
      const images = this.addedPhotos.filter((photo) => photo.file == null);
      formData.append('images', JSON.stringify(images));
      this.addedPhotos.forEach((photo) => {
        if (photo.file != null) {
          formData.append(`imagesFile`, photo.file);
        }
      });
    }

    if (this.place?._id) {
      this.accountService.updatePlace(formData).subscribe((response: any) => {
        this.toastService.showSuccess('Place updated successfully!');
        this.isSubmittedChange.emit(true);
      }, () => {
        this.toastService.showError('Failed to update place!');
      });
    } else {
      this.accountService.addPlace(formData).subscribe((response: any) => {
        this.toastService.showSuccess('Place added successfully!');
        this.formData.reset();
        this.isSubmittedChange.emit(true);
      }, () => {
        this.toastService.showError('Failed to add place!');
      });
    }
  }

  onCountryChange($event: DropdownChangeEvent) {
    if (!$event.value) return;
    let value;
    if (typeof $event.value === 'string') {
      value = this.countries.find((country) => country.countryName.includes($event.value))?.countryCode;
    }
    this.accountService.getStatesByCountry(value ?? $event.value.countryCode).subscribe((response: any) => {
      this.states = response.data;
    });
  }

  onStateChange($event: DropdownChangeEvent) {
    if (!$event.value) return;
    let value;
    if (typeof $event.value === 'string') {
      value = this.states.find((state) => state.stateName.includes($event.value))?.stateCode;
    }
    this.accountService.getCitiesByState(value ?? $event.value.stateCode).subscribe((response: any) => {
      this.cities = response.data;
    });
  }

  roomsFormArray(): FormArray {
    return this.formData.get('rooms') as FormArray;
  }

  getRoomFormGroup(i: number): FormGroup {
    return this.roomsFormArray().at(i) as FormGroup;
  }

  addRoom() {
    this.roomsFormArray().push(new FormGroup({
      roomId: new FormControl(0),
      roomType: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      capacity: new FormControl('', Validators.required),
      roomDescription: new FormControl('', Validators.required),
      isActive: new FormControl(true),
    }));
  }

  removeRoom($event: any) {
    this.roomsFormArray().removeAt($event);
  }
}
