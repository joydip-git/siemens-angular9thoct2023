import { DataAccessService } from "./dataservice";
import { DbDataService } from "./dbdataservice";
import { FileDataService } from "./filedataservice";
import { ServiceType } from "./sevicetype";

export class Container {
    private static container: Container | null;
    private constructor() {

    }
    static instantiate() {
        if (this.container == null) {
            this.container = new Container()
        }
        return this.container
    }
    create(serviceType: ServiceType): DataAccessService {
        switch (serviceType) {
            case ServiceType.DbService:
                return new DbDataService()

            case ServiceType.FileService:
                return new FileDataService()
        }
    }
}