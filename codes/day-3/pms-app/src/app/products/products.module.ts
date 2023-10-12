import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductService } from './services/product.service';
import { SERVICE_CLASS_TYPE, SERVICE_TOKEN } from '../config/constants';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductListComponent],
  providers: [
    //ProductService
    {
      provide: SERVICE_TOKEN,
      useClass: SERVICE_CLASS_TYPE
      //useValue: new ProductService()
    }
  ]
})
export class ProductsModule {
  constructor() {
    console.log('product module created')
  }
}
