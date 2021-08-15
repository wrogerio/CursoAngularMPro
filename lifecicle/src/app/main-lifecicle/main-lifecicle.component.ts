import {
  AfterViewInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-main-lifecicle',
  templateUrl: './main-lifecicle.component.html',
  styleUrls: ['./main-lifecicle.component.scss'],
})
export class MainLifecicleComponent implements OnInit {
  name: string = '';
  age: number = 0;
  food: string = '';
  foods: string[] = ['Arroz', 'Feijão', 'Macarrão'];
  clients: Client[] = [];
  onEdit: number = -1;
  ramdonNumber: number = 0

  constructor() {
    this.generateRandom()
  }

  generateRandom(){
    this.ramdonNumber = Math.round(Math.random()* 1000)
  }

  ngOnInit(): void {}

  save() {
    if (this.onEdit == -1) {
      this.clients.push({ name: this.name, age: this.age, food: this.food });
    } else {
      this.clients[this.onEdit].age = this.age;
      this.clients[this.onEdit].name = this.name;
      this.clients[this.onEdit].food = this.food;
      this.onEdit = -1;
    }
    this.age = 0;
    this.name = '';
    this.food = '';
  }

  remove(i: number) {
    this.clients.splice(i, 1)
  }

  edit(i: number) {
    this.age = this.clients[i].age;
    this.name = this.clients[i].name;
    this.food = this.clients[i].food;
    this.onEdit = i;
  }
}
