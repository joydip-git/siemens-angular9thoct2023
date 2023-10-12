import { DataAccessService } from "./dataservice";

export class DbDataService implements DataAccessService {
    getData(): string {
        return "data from db"
    }
}