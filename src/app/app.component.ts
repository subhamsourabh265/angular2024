import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalContainerComponent } from './components/signal-container/signal-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular 2024';

  counter = signal(0);

  derivedCounter = computed(() => this.counter() * 10);

  constructor() {
    const readOnlySignal = this.counter.asReadonly();
    effect(() => {
      const counterValue = this.counter();
      const derivedCounter = this.derivedCounter();
      console.log(`Counter: ${counterValue}, 
      DerivedCounter: ${derivedCounter}`);
    })
  }

  ngOnInit(): void {
    //Write a code to show fibonacci  
  }

  increment() {
    // let val = this.counter();
    // this.counter.set(++val);
    this.counter.update(val => val + 1);
  }
}
