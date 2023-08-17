import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorService {
  private messageSource = new BehaviorSubject<string>(
    'hello from behavior service'
  );
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  updateMessage(message: string) {
    this.messageSource.next(message);
  }
}
