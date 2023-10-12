import { Observable } from "rxjs";
import { ApiResponse } from "src/app/models/apiresponse";
import { Product } from "src/app/models/product";

export interface ServiceContract {
    getProducts(): Observable<ApiResponse<Product[]>>;
    getProduct(id: number): Observable<ApiResponse<Product>>;
    addProduct(product: Product): Observable<ApiResponse<Product[]>>;
    updateProduct(id: number, product: Product): Observable<ApiResponse<Product[]>>;
    deleteProduct(id: number): Observable<ApiResponse<Product[]>>;
}