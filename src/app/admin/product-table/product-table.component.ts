import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { RestDataSource } from 'src/app/model/rest.datasource';

@Component({
  //selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  //styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  products: Product[] = [];
  categories: string[] = [];

  constructor(private dataSource: RestDataSource) {
   
  }
  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(p => {
      this.products.splice(this.products.
        findIndex(p => p.id == id), 1);
    })
  }
  ngOnInit(): void {
    this.dataSource.getProducts().subscribe(data => {
      this.products = data;
    });
  }

}
