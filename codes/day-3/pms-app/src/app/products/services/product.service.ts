import { products } from "src/app/repository/products";

export class ProductService {
    constructor() {
        console.log('product service created')
    }
    getProducts() {
        return [...products]
    }
}