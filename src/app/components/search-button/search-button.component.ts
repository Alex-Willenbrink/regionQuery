import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-search-button",
  templateUrl: "./search-button.component.html",
  styleUrls: ["./search-button.component.css"]
})
export class SearchButtonComponent implements OnInit {
  @Output() onSearchClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  search() {
    this.onSearchClick.emit();
  }
}
