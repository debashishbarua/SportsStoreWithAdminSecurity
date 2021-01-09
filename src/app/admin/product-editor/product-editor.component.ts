import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { RestDataSource } from 'src/app/model/rest.datasource';

@Component({
  templateUrl: './product-editor.component.html',
})
export class ProductEditorComponent implements OnInit {
  editing: boolean = false;
  product: Product = new Product();
  products: Product[] = [];

  constructor(private dataSource: RestDataSource, private router: Router,
    activeRoute: ActivatedRoute) {    
    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      this.dataSource.getProduct(activeRoute.snapshot.params["id"]).subscribe(
        data => this.product = data
      );
    }
  }

  save(form: NgForm) {
    this.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.dataSource.saveProduct(product)
        .subscribe(p => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product)
        .subscribe(p => {
          this.products.splice(this.products.
            findIndex(p => p.id == product.id), 1, product);
        });
    }
  }
  ngOnInit(): void {
    this.dataSource.getProducts().subscribe(data => this.products=data)
  }

}
