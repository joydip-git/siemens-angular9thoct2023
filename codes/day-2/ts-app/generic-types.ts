import { Customer } from "./interfaces";
export interface IService<T> {
    add(data: T): boolean;
    getAll(): T[];
    get(): T | undefined | null;
}

export class CustomerService implements IService<Customer>{
    add(data: Customer): boolean {
        return false;
    }
    getAll(): Customer[] {
        return []
    }
    get(): Customer | undefined | null {
        return null
    }

}