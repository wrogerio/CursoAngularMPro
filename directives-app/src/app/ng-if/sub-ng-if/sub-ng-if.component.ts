import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-ng-if',
  templateUrl: './sub-ng-if.component.html',
  styleUrls: ['./sub-ng-if.component.css']
})
export class SubNgIfComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
    console.log("SubNgIfComponent")
  }

  ngOnDestroy(): void {
    console.log("Destruido")
  }

}
