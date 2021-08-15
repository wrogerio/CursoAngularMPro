import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { DepartamentService } from './departament.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any = [
    { id: 1, name: 'Laptop', departament_id: 1, price: 40, description: 'Laptop Dell'},
    { id: 2, name: 'Mouse', departament_id: 1, price: 9, description: 'Mouse Gamer'},
  ]
  private products: Product[] = []
  private nextId: number = 0;
  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>()
  

  constructor(private depService: DepartamentService) {
    this.dataFromServer.forEach((x:any) => {
      this.products.push({
        id: x.id,
        name: x.name,
        department: this.depService.getDepartmentById(x.id),
        price: x.price,
        description: x.description
      })
    })
  }

  getProducts(): Product[] {
    return this.products
  }

  addProduct(p: Product){
    this.nextId = this.products.length + 1
    let newProd: Product = {id: this.nextId, ...p}
    this.products.push(newProd)
    
    this.onNewProduct.emit(newProd)
  }
}
