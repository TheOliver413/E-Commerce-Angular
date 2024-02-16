import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message = '';

  counter = signal(0);
  // counterRef: number | undefined;

  constructor() {
    // NO ASYNC
    // Before render
    // Una vez
    console.log('contructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // Before and during render
    // Varias veces
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    console.log(duration);

    if(duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // after render
    // Una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>',this.duration);
    console.log('message =>',this.message);
    // this.counterRef = window.setInterval(() => {
    //   console.log('run interval')
    //   this.counter.update(statePrev => statePrev + 1);
    // }, 1000)
  }

  ngAfterViewInit() {
    // after render
    // Los hijos ya fueron renderizados?
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    // window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('Change durations');
    console.log('-'.repeat(10));
  }
}
