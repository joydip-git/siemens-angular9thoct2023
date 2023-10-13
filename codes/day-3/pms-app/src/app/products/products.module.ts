import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductService } from './services/product.service';
import { SERVICE_CLASS_TYPE, SERVICE_TOKEN } from '../config/constants';
import { HttpClientModule } from '@angular/common/http';
import { ProductsRoutingModule } from './products-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    AddProductComponent,
    UpdateProductComponent,
    FilterComponent,
    FilterProductPipe
  ],
  imports: [
    CommonModule, HttpClientModule, ProductsRoutingModule, FormsModule, ReactiveFormsModule
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
