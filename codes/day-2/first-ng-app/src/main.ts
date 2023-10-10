import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

const platformObject = platformBrowserDynamic()
platformObject.bootstrapModule(AppModule)