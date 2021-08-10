import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  i = 0;
  buttonName = "It was clicked " + this.i + " times";
  spinnerMode: ProgressSpinnerMode = "determinate";
  btnEnable = true;
  selectDisabled = false;
  selectedValue = "";
  selectedText = "";
  inputName = "Vivian";

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log('clicou')
  }

  inc() {
    this.i++;
    this.buttonName = 'It was clicked ' + this.i + ' times';
  }

  disable() {
    this.btnEnable = false;
    this.spinnerMode = 'indeterminate';

    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = 'determinate';
    }, 3000)
  }

  cbChange(event: any) {
    this.selectDisabled = event.checked;
  }

  selectedChange(event: any) {
    this.selectedValue = event.value;
    this.selectedText  =event.source.triggerValue;
  }

  inputEvent(event: any){
    this.inputName = event.target.value;
  }
}
