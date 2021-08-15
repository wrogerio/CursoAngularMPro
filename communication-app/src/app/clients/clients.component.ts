import { Component, OnInit } from '@angular/core';
import { Client } from './clients.module';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  name: string = '';
  age: number = 0;
  clients: Client[] = [];

  constructor() {}

  ngOnInit(): void {}

  save() {
    this.clients.push({ name: this.name, age: this.age });
    this.name = ''
    this.age = 0
  }

  updateClient(e: any, i: number){
    this.clients[i].name = e.name
    this.clients[i].age = e.age
  }

  removeClient(i: number){
    this.clients.splice(i, 1)
  }
}
