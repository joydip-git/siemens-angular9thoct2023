import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    //register components
    declarations: [AppComponent],
    //register the names of any built-in modules or application feature modules, that you need in the current module
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}