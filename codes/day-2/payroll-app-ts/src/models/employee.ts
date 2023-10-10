export class Employee {
    /*
    private _id: number;
    private _name: string;
    private _basicPay: number;
    private _daPay: number;
    private _hraPay: number;

    constructor(_id: number, _name: string, _basicPay: number, _daPay: number, _hraPay: number) {
        this._id = _id
        this._name = _name
        this._basicPay = _basicPay
        this._hraPay = _hraPay
        this._daPay = _daPay
    }
    */

    constructor(private _id: number, private _name: string, private _basicPay: number, private _daPay: number, private _hraPay: number) {

    }

    public set id(value: number) {
        this._id = value
    }
    public get id(): number {
        return this._id
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get basicPay(): number {
        return this._basicPay;
    }
    public set basicPay(value: number) {
        this._basicPay = value;
    }
    public get daPay(): number {
        return this._daPay;
    }
    public set daPay(value: number) {
        this._daPay = value;
    }
    public get hraPay(): number {
        return this._hraPay;
    }
    public set hraPay(value: number) {
        this._hraPay = value;
    }

    calculateSalary(): number {
        return this._basicPay + this._daPay + this._hraPay
    }
}