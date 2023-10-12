import { DataAccessService } from "./dataservice";

export class FileDataService implements DataAccessService {
    getData(): string {
        return "data from file"
    }
}