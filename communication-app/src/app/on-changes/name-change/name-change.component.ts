import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-name-change',
  templateUrl: './name-change.component.html',
  styleUrls: ['./name-change.component.scss']
})
export class NameChangeComponent implements OnInit, OnChanges {

  @Input() name: string = ''
  nameBefore: string = ''

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.nameBefore = changes.name.previousValue
    if(changes.hasOwnProperty('name')){
      this.nameBefore = changes.name.previousValue
    }
  }

  ngOnInit(): void {
  }

  
}
