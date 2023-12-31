import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ServiceContract } from '../../services/service.contract';
import { SERVICE_TOKEN } from 'src/app/config/constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy {

  productRecords?: Product[];
  isRequestComplete = false
  errorMessage = ''
  private subscription?: Subscription;
  private deleteSubscription?: Subscription;
  filterText = ''

  //private service: ProductService;

  //pass reference of a service class to the parameter _service, associated with a token (provider name) 'SERVICE_TOKEN'
  //@Inject() is the decorator for a paremeter
  constructor(@Inject(SERVICE_TOKEN) private _service: ServiceContract) {
    console.log('product list component created')
  }

  updateFilterText(arg: string) {
    //console.log(arg)
    this.filterText = arg
  }
  delete(id: number) {
    this.deleteSubscription = this._service
      .deleteProduct(id)
      .subscribe({
        next: (response) => {
          if (response.data != null) {
            //this.productRecords = response.data
            this.isRequestComplete = true
            this.errorMessage = ''
            window.alert('record deleted')
          } else {
            this.errorMessage = response.message
            this.isRequestComplete = true
          }
        },
        error: (err) => {
          this.errorMessage = err.message
          this.isRequestComplete = true
        },
        complete: () => {
          //use this technique, if delete api does not return updated bakend data
          this.getRecords()
        }
      })
  }
  ngOnDestroy(): void {
    console.log('product list component is going to be destroyed now...')
    this.subscription?.unsubscribe()
    this.deleteSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    this.getRecords()
  }
  private getRecords() {
    this.subscription =
      this._service.getProducts()
        .subscribe({
          //will be executed when Observable receives response with proper data
          next: (response) => {

            if (response.data != null) {
              this.productRecords = response.data
              this.isRequestComplete = true
              this.errorMessage = ''
            } else {
              this.productRecords = undefined
              this.isRequestComplete = true
              this.errorMessage = response.message
            }
          },
          //will be executed when Observable receives response with error
          error: (err: Error) => {
            this.productRecords = undefined
            this.isRequestComplete = true
            this.errorMessage = err.message
          },
          //will be executed afetr "next" callback is executed. used for further async calls or some other task that you need to perform after successfully getting the response from backend server
          //complete: () => { }
        })
  }
}