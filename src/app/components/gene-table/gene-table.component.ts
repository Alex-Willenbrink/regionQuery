import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
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

  dataSource;

  columns: string[] = [
    "gene_id",
    "gene_symbol",
    "description",
    "chromosome",
    "start",
    "end"
  ];

  ngOnChanges(changes: SimpleChanges) {
    console.log("changing");
    this.dataSource = new MatTableDataSource(this.genes);
  }

  // dataSource = new MatTableDataSource(this.genes);

  constructor() {}

  ngOnInit() {}
}

// export class Gene {
//   gene_id: string;
//   gene_symbol: string;
//   description: string;
//   chromosome: number;
//   start: number;
//   end: number;
// }

// const GENE_DATA: Gene[] = [
//   {
//     gene_id: "1",
//     gene_symbol: "GREAT",
//     description: "a great gene",
//     chromosome: 8,
//     start: 5,
//     end: 9
//   },
//   {
//     gene_id: "1",
//     gene_symbol: "GREAT",
//     description: "a great gene",
//     chromosome: 8,
//     start: 5,
//     end: 9
//   },
//   {
//     gene_id: "1",
//     gene_symbol: "GREAT",
//     description: "a great gene",
//     chromosome: 8,
//     start: 5,
//     end: 9
//   }
// ];
