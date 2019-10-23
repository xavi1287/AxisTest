import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading = new BehaviorSubject(false);
  isOpen = false;

  @Output() cambio: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }
  toggle() {
    this.isOpen = !this.isOpen;
    this.cambio.emit(this.isOpen);
  }
}
