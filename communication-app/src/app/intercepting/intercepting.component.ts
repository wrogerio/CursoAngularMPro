import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intercepting',
  templateUrl: './intercepting.component.html',
  styleUrls: ['./intercepting.component.scss']
})
export class InterceptingComponent implements OnInit {
  name: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

}
