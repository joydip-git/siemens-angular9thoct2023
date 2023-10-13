import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  inputText = ''
  @Output('filterValueChanged') filterTextChanged: EventEmitter<string> = new EventEmitter<string>()

  inputValueChanged(value: string) {
    this.inputText = value
    this.filterTextChanged.emit(this.inputText)
  }
}

/**
 * <app-filter (filterValueChanged)="method-of-plc($event)"></app-filter>
 */