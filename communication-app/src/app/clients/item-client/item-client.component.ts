import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../clients.module';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {

  name: string = '';
  age: number = 0;
  onEdit: boolean = false
  @Input() client?: Client
  @Output() updateClient = new EventEmitter<Client>()
  @Output() removeClient = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.onEdit = false;
    this.updateClient.emit( { name: this.name, age: this.age})
  }
  
  edit(){
    this.onEdit = true;
    this.name = this.client?.name || ''
    this.age = this.client?.age || 0
  }
  
  remove(){
    this.onEdit = false;
    this.removeClient.emit()
  }
}
