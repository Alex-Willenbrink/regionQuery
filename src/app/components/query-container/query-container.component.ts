import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-query-container",
  templateUrl: "./query-container.component.html",
  styleUrls: ["./query-container.component.css"]
})
export class QueryContainerComponent implements OnInit {
  @Output() onSearch = new EventEmitter<any>();

  searchText: string;
  species: string;
  constructor() {}

  ngOnInit() {}

  onInputChange(searchText: string) {
    this.searchText = searchText;
  }

  onSpeciesChange(species: string) {
    this.species = species;
  }

  onSearchClick() {
    this.onSearch.emit({
      species: this.species,
      sequenceQuery: this.searchText
    });
  }
}

/*
- species-dropdown
- search-field
- search-button
 */
