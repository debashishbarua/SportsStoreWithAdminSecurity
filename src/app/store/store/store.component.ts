import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { RestDataSource } from 'src/app/model/rest.datasource';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public selectedCategory = null;
  private products: Product[] = [];
  public categories: string[] = [];
  constructor(private dataSource: RestDataSource) {    
  }
  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
    this.getProducts();
  }
  ngOnInit(): void {
    this.dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getProducts(): Product[] {
    return this.products
      .filter(p => this.selectedCategory == null || this.selectedCategory == p.category);
  }
}




