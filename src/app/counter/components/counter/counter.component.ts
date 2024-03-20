import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  // public valor:number = 10;
  public title: string = 'Mi primera App';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  reset(): void {
    this.counter = 10;
  }
}
