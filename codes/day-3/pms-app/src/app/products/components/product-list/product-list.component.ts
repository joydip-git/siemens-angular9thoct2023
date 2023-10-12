import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  productRecords?: Product[];
  private service: ProductService;

  constructor(_service: ProductService) {
    this.service = _service
    console.log('product list component created')
  }
  ngOnInit(): void {
    this.productRecords = this.service.getProducts()
  }
}