import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

interface Time {
  hours: string[];
  minutes: string[];
  seconds: string[];
}

@Component({
  selector: 'app-clock',
  standalone: false, 
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
  
})
export class ClockComponent  implements OnInit  {
  time: Date = new Date();
  hours: number[];
  minutes: number[];
  seconds: number[];
  private subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(() => {
      this.time = new Date();
      this.hours = this.getDigits(this.time.getHours());
      this.minutes = this.getDigits(this.time.getMinutes());
      this.seconds = this.getDigits(this.time.getSeconds());
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getDigits(num: number): number[] {
    return num.toString().padStart(2, '0').split('').map(digit => parseInt(digit));
  }
}
