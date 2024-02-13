import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalDataService {

  private counterSignal = signal(0);
  
  counter = this.counterSignal.asReadonly();

  increment() {

    if(this.counter() > 10) {
      throw `Maximum value reached!`;
    }
    this.counterSignal.update(val => ++val);
  }
}
