import { products } from "src/app/repository/products";

export class ProductService {
    getProducts() {
        return [...products]
    }
}