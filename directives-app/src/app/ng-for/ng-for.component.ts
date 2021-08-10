import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "Wellington",
    "Vivian",
    "Moises",
    "Patrícia",
    "Miriã"
  ]

  cities = [
    {name: "São Paulo", state: "SP"},
    {name: "Rio de Janeiro", state: "RJ"},
    {name: "Curitiba", state: "PR"},
    {name: "Barra Velha", state: "SC"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
