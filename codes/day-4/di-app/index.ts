import { Container } from "./container";
import { DataAccessService } from "./dataservice";
import { ServiceType } from "./sevicetype";
import { User } from "./user";

const containerInstance = Container.instantiate()
const service: DataAccessService = containerInstance.create(ServiceType.FileService)

const userOfService = new User(service)
userOfService.fetchData()