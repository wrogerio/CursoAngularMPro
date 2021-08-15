import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  value: number = 0;
  title: string = 'Emissão de Eventos'

  constructor() { }

  ngOnInit(): void {
  }

  incFunc(event: number){
    this.value += event
  }
}
