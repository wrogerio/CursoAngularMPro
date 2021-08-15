import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Departament } from '../models/departament.model';
import { DepartamentService } from '../services/departament.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit{

  name: string = ''
  department: any
  price: number = 0
  description: string = ''
  
  departments: Departament[] = []
  
  constructor(private prodService: ProductService, private depService: DepartamentService) {}

  ngOnInit(): void {
    this.departments = this.depService.getDepartaments()
  }

  save(){
    this.prodService.addProduct({
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department})

      this.clear()
  }

  clear(){
    this.name = ''
    this.price = 0
    this.description = ''
    this.department = null
  }

}
