import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name: string  = "Wellington";
  idade: number = 39
  client = {
    firstName: "Wellington",
    lastName: "Rogerio",
    address: "Rua Frei Orestes Girardi, 65",
    age: 39
  }

  constructor() { }

  ngOnInit(): void {
  }

  alterar(){
    this.idade *= 2;
  }

  adicionarIdade(){
    this.client.age ++;
  }
}
