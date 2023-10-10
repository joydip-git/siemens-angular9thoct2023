interface IOperations {
    add(a: number, b: number): number;
}
class Calculation implements IOperations {
    add(a: number, b: number): number {
        return a + b
    }
}
export interface Customer {
    name: string;
    id: number;
    address?: string;
    mobileNo: number;
}

class CustomerInfo implements Customer {
    name: string;
    id: number;
    address: string;
    mobileNo: number;
}

const anilCustomer: Customer = {
    name: 'anil',
    id: 1,
    address: 'bangalore',
    mobileNo: 9090909090
}

const customers: Customer[] = [
    anilCustomer,
    {
        name: 'sunil',
        id: 2,
        mobileNo: 9090909091,
        // address: 'chennai',
    }
]