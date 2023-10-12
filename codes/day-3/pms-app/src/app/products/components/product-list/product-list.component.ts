import { Component, Inject, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../services/product.service';
import { ServiceContract } from '../../services/service.contract';
import { SERVICE_TOKEN } from 'src/app/config/constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  productRecords?: Product[];
  private service: ProductService;

  //pass reference of a service class to the parameter _service, associated with a token (provider name) 'SERVICE_TOKEN'
  //@Inject() is the decorator for a paremeter
  constructor(@Inject(SERVICE_TOKEN) _service: ServiceContract) {
    this.service = _service
    console.log('product list component created')
  }
  ngOnInit(): void {
    this.productRecords = this.service.getProducts()
  }
}