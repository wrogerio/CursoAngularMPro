import { Injectable } from '@angular/core';
import { Departament } from '../models/departament.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  private departments: Departament[] = [
    {id: 1, name: 'Clothing'},
    {id: 2, name: 'Books'},
    {id: 3, name: 'Electronics'},
    {id: 4, name: 'Computers'},
  ]
  private nextId: number = 0

  constructor() { }

  getDepartaments(): Departament[]{
    return this.departments
  }

  addDepartament(d: Departament){
    console.log(this.departments)
    this.nextId = this.departments.length + 1
    this.departments.push({id:  this.nextId, ...d})
    console.log(this.departments)
  }

  getDepartmentById(id: number): any{
    return this.departments.find(d => d.id == id)
  }
}
