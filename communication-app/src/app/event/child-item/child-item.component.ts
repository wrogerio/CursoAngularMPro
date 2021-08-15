import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.scss'],
})
export class ChildItemComponent implements OnInit {
  @Input() title: string = '';
  @Output() incEmit = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  btnClick(numero: number) {
    this.incEmit.emit(numero)
  }
}
