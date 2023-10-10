import { Employee } from "./employee";

export class Developer extends Employee {

    //private _incentivePay: number;
    constructor(_id: number, _name: string, _basic: number, _da: number, _hra: number, private _incentivePay: number) {
        super(_id, _name, _basic, _da, _hra)
        //this._incentivePay = _incentivePay
    }

    public get incentivePay(): number {
        return this._incentivePay;
    }
    public set incentivePay(value: number) {
        this._incentivePay = value;
    }

    calculateSalary(): number {
        return super.calculateSalary() + this.incentivePay
    }
}