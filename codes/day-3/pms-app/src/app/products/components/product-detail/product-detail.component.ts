import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ServiceContract } from '../../services/service.contract';
import { SERVICE_TOKEN } from 'src/app/config/constants';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  private subscription?: Subscription;
  productInfo?: Product;
  isRequestComplete = false
  errorMessage = ''

  constructor(
    private currentRoute: ActivatedRoute,
    private router: Router,
    @Inject(SERVICE_TOKEN) private _service: ServiceContract
  ) {

  }

  goBack() {
    this.router.navigate(['/products'])
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    //to fect route data use 'params' property
    //to fect query string data use 'queryParams' property
    const routeData = snapshot.params //{id:1}
    //Number(routeData['id'])
    //parseInt(routeData['id'])
    const id = +(routeData['id'])

    this.subscription =
      this._service
        .getProduct(id)
        .subscribe(
          {
            next: (response) => {
              if (response.data != null) {
                this.productInfo = response.data
                this.isRequestComplete = true
                this.errorMessage = ''
              } else {
                this.productInfo = undefined
                this.isRequestComplete = true
                this.errorMessage = response.message
              }
            },
            error: (err) => {
              this.productInfo = undefined
              this.isRequestComplete = true
              this.errorMessage = err.message
            }
          }
        )
  }
}
