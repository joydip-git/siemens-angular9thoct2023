import { DataAccessService } from "./dataservice";

export class User {
    private service: DataAccessService;

    constructor(_service: DataAccessService) {
        this.service = _service
    }
    fetchData() {
        if (this.service) {
            const data: string = this.service.getData()
            console.log(data)
        }
    }
}