import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../services/product.service';
//import { products } from 'src/app/repository/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //productRecords = products
  productRecords?: Product[];


  constructor() {
    //this.productRecords = new ProductService().getProducts()
  }
  ngOnInit(): void {
    this.productRecords = new ProductService().getProducts()
  }
}