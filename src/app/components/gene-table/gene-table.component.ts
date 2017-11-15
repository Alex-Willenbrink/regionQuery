import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { Gene } from "../../classes/Gene";

@Component({
  selector: "app-gene-table",
  templateUrl: "./gene-table.component.html",
  styleUrls: ["./gene-table.component.css"]
})
export class GeneTableComponent implements OnInit, OnChanges {
  @Input() genes: Gene[];
  @Input() selectedGene: Gene;

  @Output() onSelectGene: EventEmitter<any> = new EventEmitter();

  dataSource;

  columns: string[] = [
    "gene_id",
    "gene_symbol",
    "description",
    "chromosome",
    "start",
    "end"
  ];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(this.genes);
  }

  selectGene(gene: Gene) {
    this.onSelectGene.emit(gene);
  }

  changeRowClass(row): boolean {
    if (this.selectedGene) {
      return this.selectedGene.gene_id === row.gene_id;
    }
    return false;
  }
}
