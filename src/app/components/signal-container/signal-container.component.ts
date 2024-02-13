import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-container',
  standalone: true,
  imports: [],
  templateUrl: './signal-container.component.html',
  styleUrl: './signal-container.component.scss'
})
export class SignalContainerComponent {
  counter = signal(0);

  employees = signal({
    empId: 1,
    name: 'SS'
  });

  places = signal(['Giridih', 'Dhanbad', 'Deoghar']);  

  derivedCounter = computed(() => this.counter() * 10);
  
  constructor() {
    
  }

  changeData() {
    this.employees.set({
      empId: 2,
      name: 'Subham'
    });

    this.places.update(val => [...val, 'Telkhara']);
  }
}
