import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "src/app/models/product";

@Pipe({
    name: 'productfilter'
})
export class FilterProductPipe implements PipeTransform {
    transform(value: Product[], ...args: string[]): Product[] {
        if (value.length > 0 && args[0] && args[0] != '') {
            return value.filter(
                (p) => {
                    return p.productName.toLocaleLowerCase().includes(args[0].toLocaleLowerCase())
                }
            )
        } else
            return value
    }
}