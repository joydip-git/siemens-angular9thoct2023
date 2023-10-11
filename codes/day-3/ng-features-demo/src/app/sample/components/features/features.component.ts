import { Component } from "@angular/core";

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.css'],
    //template:``,
    //styles: ['background-color:"blue"','']
})
export class FeaturesComponent {
    title = 'data binding feature'
    personInfo = {
        name: 'sunil',
        id: 1
    }
    divWidth = 300

    changeTitle(arg: string) {
        this.title = arg
    }
}