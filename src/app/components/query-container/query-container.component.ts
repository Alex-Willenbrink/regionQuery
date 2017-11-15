import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: "app-query-container",
  templateUrl: "./query-container.component.html",
  styleUrls: ["./query-container.component.css"]
})
export class QueryContainerComponent implements OnInit {
  @Output() onSearch = new EventEmitter<any>();

  selectionError: string = null;

  searchText: string;
  species: string;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    this.dialog.open(DialogBoxComponent, {
    });
  }


  onInputChange(searchText: string) {
    this.searchText = searchText;
  }

  onSpeciesChange(species: string) {
    this.species = species;
    this.selectionError = null;
    // this.openDialog();
  }

  onSearchClick() {
    if(!this.species) {
      this.selectionError = "Please select species";
    } else {
      this.onSearch.emit({
        species: this.species,
        sequenceQuery: this.searchText
      });
    }
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-box.component.html',
})
export class DialogBoxComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
