import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  @Input () formGroup !: FormGroup;
  @Input() index !: number;
  @Input() submissionType !: string | undefined;
  @Output() removeRoom : EventEmitter<any> = new EventEmitter<any>();

  removeRoomFromParent() {
    this.removeRoom.emit(this.index);
  }
}
