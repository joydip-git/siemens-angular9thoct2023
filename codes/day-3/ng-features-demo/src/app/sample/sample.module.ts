import { NgModule } from "@angular/core";
import { FeaturesComponent } from "./components/features/features.component";
import { CommonModule } from "@angular/common";

@NgModule({
    //register components, directives, pipes
    declarations: [FeaturesComponent],

    //register services
    providers: [],

    //register built-in or features modules
    imports: [CommonModule],

    //mention bootstrapper component(s)
    bootstrap: [],

    //mention the exportable components, directives, pipes or modules
    exports: [FeaturesComponent]
})
export class SampleModule {

}