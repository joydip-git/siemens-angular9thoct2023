import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SERVICE_TOKEN } from 'src/app/config/constants';
import { Product } from 'src/app/models/product';
import { ServiceContract } from '../../services/service.contract';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";
import { productCodeValidator } from '../../validators/product-code.validator';

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
    //   productId: new FormControl(0, Validators.required),
    //   productName: new FormControl('', Validators.required),
    //   productCode: new FormControl('', Validators.required),
    //   price: new FormControl(0, Validators.required),
    //   starRating: new FormControl(0, Validators.required),
    //   description: new FormControl('', Validators.required),
    //   releaseDate: new FormControl(new Date().toDateString(), Validators.required)
    // })
    this.addForm = this.builder.group({
      productId: [0, Validators.required],
      productName: ['', [Validators.required]],
      productCode: ['', [Validators.required, productCodeValidator]],
      price: [0, [Validators.required, Validators.max(1000)]],
      starRating: [0, Validators.required],
      description: ['', Validators.required],
      releaseDate: [new Date().toDateString(), Validators.required]
    })
  }
  get productId() {
    return this.addForm.get('productId')
  }
  get productName() {
    return this.addForm.get('productName')
  }
  get productCode() {
    return this.addForm.get('productCode')
  }
  get description() {
    return this.addForm.get('description')
  }
  get price() {
    return this.addForm.get('price')
  }
  get starRating() {
    return this.addForm.get('starRating')
  }
  get releaseDate() {
    return this.addForm.get('releaseDate')
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  submitData(element: HTMLInputElement) {
    // console.log(this.addForm.value)
    console.log(this.addForm.get('price'))
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
            imageUrl: imageBlobData
          }
          this.subscription = this.service
            .addProduct(productToAdd)
            .subscribe({
              next: (response) => {
                if (response.data != null) {
                  window.alert('product added....')
                  this.router.navigate(['./products'])
                } else {
                  window.alert(`product could not be added....${response.message}`)
                }
              },
              error: (err) => {
                window.alert(err.message)
              },
              complete: () => {
                //this.router.navigate(['./products'])
              }
            })
        }
      )
      reader.readAsDataURL(uploadedFile)
    }
  }
}
