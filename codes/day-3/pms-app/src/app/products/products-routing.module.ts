import { NgModule } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { UpdateProductComponent } from "./components/update-product/update-product.component";

const productRoutes: Route[] = [
    {
        path: 'products',
        children: [
            {
                path: '',
                component: ProductListComponent
            },
            {
                path: 'add',
                component: AddProductComponent
            },
            {
                path: 'view/:id',
                component: ProductDetailComponent
            },
            {
                path: 'update/:id',
                component: UpdateProductComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {

}