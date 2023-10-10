import { Employee } from "./employee";

export class Hr extends Employee {

    //private _gratuityPay: number;
    constructor(id: number, name: string, basic: number, da: number, hra: number, private _gratuityPay: number) {
        super(id, name, basic, da, hra)
        //this._gratuityPay = _gratuityPay
    }

    public get gratuityPay(): number {
        return this._gratuityPay;
    }
    public set gratuityPay(value: number) {
        this._gratuityPay = value;
    }

    calculateSalary() {
        return super.calculateSalary() + this.gratuityPay
    }
}