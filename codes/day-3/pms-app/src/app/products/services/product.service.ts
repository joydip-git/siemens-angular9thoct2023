import { products } from "src/app/repository/products";
import { ServiceContract } from "./service.contract";

export class ProductService implements ServiceContract {
    constructor() {
        console.log('product service created')
    }
    getProducts() {
        return [...products]
    }
}