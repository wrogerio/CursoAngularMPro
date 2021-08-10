import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person = {
    nome: 'Wellington',
    sobrenome: 'Rogério',
    idade: 39,
    endereco: 'Rua Frei Orestes Girardi, 65'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
