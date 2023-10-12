import { products } from "src/app/repository/products";
import { ServiceContract } from "./service.contract";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_BASE_URL } from "src/app/config/constants";
import { ApiResponse } from "src/app/models/apiresponse";
import { Product } from "src/app/models/product";
import { Observable } from "rxjs";

//providedIn:'root' means you are registering the service directly with your root module providers:[] property like this=> providers:[ProductService]
//you don't need register the service using providers:[ProductService] in the roor module
// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class ProductService implements ServiceContract {
    constructor(private _http: HttpClient) {
        // console.log('product service created')
    }
    getProducts() {
        const obs: Observable<ApiResponse<Product[]>> = this._http.get<ApiResponse<Product[]>>(API_BASE_URL)
        return [...products]
    }
}