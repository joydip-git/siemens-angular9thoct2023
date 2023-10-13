import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SERVICE_TOKEN } from 'src/app/config/constants';
import { Product } from 'src/app/models/product';
import { ServiceContract } from '../../services/service.contract';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnDestroy {
  //idCtrl = new FormControl(0)
  addForm: FormGroup;
  private subscription?: Subscription;

  constructor(
    private builder: FormBuilder,
    @Inject(SERVICE_TOKEN) private service: ServiceContract,
    private router: Router) {
    // this.addForm = new FormGroup({
    //   productId: new FormControl(0),
    //   productName: new FormControl(''),
    //   productCode: new FormControl(''),
    //   price: new FormControl(0),
    //   starRating: new FormControl(0),
    //   description: new FormControl(''),
    //   releaseDate: new FormControl()
    // })
    this.addForm = this.builder.group({
      productId: [0],
      productName: [''],
      productCode: [''],
      price: [0],
      starRating: [0],
      description: [''],
      releaseDate: []
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  submitData(element: HTMLInputElement) {
    // console.log(this.addForm.value)
    //console.log(this.addForm.get('productId'))
    if (element.files != null) {
      const uploadedFile = element.files[0]

      const reader = new FileReader()
      reader.addEventListener(
        'load',
        () => {
          const imageBlobData = reader.result
          //console.log(typeof imageBlobData)

          const productToAdd: Product = {
            ...this.addForm.value,
            imageUrl: imageBlobData?.toString()
          }
          this.subscription = this.service
            .addProduct(productToAdd)
            .subscribe({
              next: (response) => {
                if (response.data != null) {
                  window.alert('product added....')
                  this.router.navigate(['./products'])
                } else {
                  window.alert('product could not be added....')
                }
              },
              error: () => { },
              complete: () => { }
            })
        }
      )
      reader.readAsDataURL(uploadedFile)
    }
  }
}
