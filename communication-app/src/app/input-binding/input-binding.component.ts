import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client/client.module';

@Component({
  selector: 'input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.scss']
})
export class InputBindingComponent implements OnInit {
  
  @Input('nome') name: string = ''
  @Input('sobrenome') lastName: string = ''
  @Input() age: number = 0

  clients: Client[]

  constructor() {
    this.clients = [
      {id: 1, name: 'Wellington', age: 39},
      {id: 2, name: 'Vivian', age: 38},
      {id: 3, name: 'Moiza', age: 24},
      {id: 4, name: 'Patricia', age: 42}
    ]
   }

  ngOnInit(): void {
  }

}
