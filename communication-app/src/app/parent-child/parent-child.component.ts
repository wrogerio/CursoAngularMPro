import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent implements OnInit {

  @ViewChild('timer2') myTimer?: TimerComponent

  constructor() { }

  ngOnInit(): void {
  }

  start(){
    this.myTimer?.start();
  }
  
  stop(){
    this.myTimer?.stop();
    
  }
  
  clear(){
    this.myTimer?.clear();
  }

}
