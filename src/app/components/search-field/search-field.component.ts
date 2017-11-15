import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search-field",
  templateUrl: "./search-field.component.html",
  styleUrls: ["./search-field.component.css"]
})
export class SearchFieldComponent implements OnInit {
  searchText: string = "";

  @Output() onInputChange: EventEmitter<string> = new EventEmitter();

  constructor() {}

  inputChange() {
    this.onInputChange.emit(this.searchText);
  }

  ngOnInit() {}
}
