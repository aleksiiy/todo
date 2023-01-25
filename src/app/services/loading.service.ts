import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public status: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  constructor() {

  }
}
