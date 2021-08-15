import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  
  _name: string = ''

  @Input() 
  set name(name: string){
    this._name = 'your name is ' + (name.replace(/ /g, '') || '<>')
  }

  get name(): string{
    return this._name
  }

  constructor() { }

  ngOnInit(): void {
  }

}
