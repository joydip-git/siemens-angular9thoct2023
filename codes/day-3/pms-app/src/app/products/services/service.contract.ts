import { Product } from "src/app/models/product";

export interface ServiceContract {
    getProducts(): Product[];
}