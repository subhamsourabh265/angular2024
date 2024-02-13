import { Component, computed, input, signal } from '@angular/core';
import { SignalDataService } from '../../services/signal-data.service';

@Component({
  selector: 'app-signal-container',
  standalone: true,
  imports: [],
  templateUrl: './signal-container.component.html',
  styleUrl: './signal-container.component.scss'
})
export class SignalContainerComponent {

  inputCounter = input<number>();
  
  counter = signal(0);

  employees = signal({
    empId: 1,
    name: 'SS'
  });

  places = signal(['Giridih', 'Dhanbad', 'Deoghar']);  

  derivedCounter = computed(() => {
    const counter = this.signalService.counter();

    return counter;
  });
  
  constructor( private signalService: SignalDataService) {
    
  }

  changeData() {
    this.employees.set({
      empId: 2,
      name: 'Subham'
    });

    this.places.update(val => [...val, 'Telkhara']);
  }

  incrementData() {
    this.signalService.increment();
  }
}
