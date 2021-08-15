import {
  AfterContentInit,
  AfterViewInit,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';

export interface LifecicleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss'],
})
export class LifecycleChildComponent
  implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterViewInit
{
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() food: string = '';
  events: LifecicleEvent[] = [];
  nextEventId: number = 0;
  colors: string[] = ['accent', 'warn', 'primary'];

  constructor() {
    console.log(this.name + ' - constructor');
    this.newEvent('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.name + ' - ngOnChanges');
    this.newEvent('OnChanges');
  }

  ngOnInit(): void {
    console.log(this.name + ' - ngOnInit');
    this.newEvent('OnInit');
  }

  ngAfterContentInit(): void {
    console.log(this.name + ' - ngAfterContentInit');
    this.newEvent('AfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log(this.name + ' - ngAfterViewInit');
    this.newEvent('AfterViewInit');
  }

  ngOnDestroy(): void {
    console.log(this.name + ' - ngOnDestroy');
    this.newEvent('OnDestroy');
  }

  newEvent(name: string) {
    let id = this.nextEventId++;
    this.events.push({
      id: id,
      color: this.colors[id % this.colors.length],
      name: name,
    });
    setTimeout(() => {
      let idx = this.events.findIndex((e) => e.id === id);
      if (idx >= 0) {
        this.events.splice(idx, 1);
      }
    }, 3000 + this.events.length * 2000);
  }
}
