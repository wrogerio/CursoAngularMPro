import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

  @ViewChild(MatTable) datatable?: MatTable<any>
  products: Product[] = [];
  columns: string[] = []
  constructor(private _prodServ: ProductService) {
    this.columns = ['Id', 'Name', 'Departament', 'Price', 'Description']
   }

  ngOnInit(): void {
    this.products = this._prodServ.getProducts()
    this._prodServ.onNewProduct.subscribe(prod => {
      this.datatable?.renderRows()
    })
  }
}
