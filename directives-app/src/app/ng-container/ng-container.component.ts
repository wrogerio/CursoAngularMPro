import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {
  tipo = '';
  users = [
    {login: "wsilva", role: "admin", lastLogin: new Date('2/5/2018')},
    {login: "jalima", role: "user", lastLogin: new Date('12/9/2017')},
    {login: "fcoelho", role: "user", lastLogin: new Date('4/20/2020')},
    {login: "bsilva", role: "user", lastLogin: new Date('6/18/2014')},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
