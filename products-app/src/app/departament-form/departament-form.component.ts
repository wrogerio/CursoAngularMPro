import { Component, OnInit } from '@angular/core';
import { DepartamentService } from '../services/departament.service';

@Component({
  selector: 'app-departament-form',
  templateUrl: './departament-form.component.html',
  styleUrls: ['./departament-form.component.scss'],
})
export class DepartamentFormComponent implements OnInit {
  depName: string = '';
  
  constructor(private _depServ: DepartamentService) {}

  ngOnInit(): void {}

  save() {
    this._depServ.addDepartament({
      name: this.depName,
    });
    this.clear()
  }

  clear() {
    this.depName = '';
  }
}
