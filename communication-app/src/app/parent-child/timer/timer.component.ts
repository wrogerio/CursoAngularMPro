import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  miliseconds: number = 0;
  interval: any = 0;
  running: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  start() {
    if (!this.running) {
      this.interval = setInterval(() => {
        this.miliseconds += 100;
      }, 100);
      this.running = true;
      
    }
  }

  stop() {
    if (this.running) {
      clearTimeout(this.interval);
      this.running = false;
    }
  }

  clear() {
    this.miliseconds = 0
  }

  round(n: number) : number{
    return  Math.round(n)
  }
}
