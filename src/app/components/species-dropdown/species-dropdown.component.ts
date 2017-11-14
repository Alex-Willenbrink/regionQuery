import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-species-dropdown",
  templateUrl: "./species-dropdown.component.html",
  styleUrls: ["./species-dropdown.component.css"]
})
export class SpeciesDropdownComponent implements OnInit {
  @Output() onSpeciesChange = new EventEmitter<string>();

  species: string[] = ["Human", "Mouse", "Rat", "Dog"];
  constructor() {}

  ngOnInit() {}

  changeSpecies(speciesText) {
    this.onSpeciesChange.emit(speciesText.value);
  }
}
