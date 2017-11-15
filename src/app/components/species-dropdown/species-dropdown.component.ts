import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-species-dropdown",
  templateUrl: "./species-dropdown.component.html",
  styleUrls: ["./species-dropdown.component.css"]
})
export class SpeciesDropdownComponent implements OnInit {
  @Input() selectionError: string;

  @Output() onSpeciesChange = new EventEmitter<string>();

  species: any[] = [
    { value: "human", label: "Human" },
    { value: "mouse", label: "Mouse" },
    { value: "rat", label: "Rat" },
    { value: "dog", label: "Dog" }
  ];

  ngOnInit() {}

  changeSpecies(speciesText) {
    this.onSpeciesChange.emit(speciesText.value);
  }
}
