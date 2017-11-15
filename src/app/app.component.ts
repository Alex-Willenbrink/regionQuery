import { Component } from "@angular/core";
import { GeneticQueriesService } from "./services/genetic-queries/genetic-queries.service";
import { Gene } from "./classes/Gene";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  genes: Gene[] = [];
  selectedGene: Gene;
  sequence: string;
  reverse: boolean = false;
  loading: boolean = false;
  loadingGenes: boolean = false;
  loadingSequence: boolean = false;

  constructor(private geneticQueriesService: GeneticQueriesService) {}

  ngOnInit() {}

  setDefaultValues() {
    this.sequence = "";
    this.selectedGene = null;
    this.genes = [];
  }

  onSearch(searchObj) {
    this.setDefaultValues();
    this.loadingGenes = true;
    this.geneticQueriesService.getOverlapRegions(searchObj).subscribe(
      result => {
        this.changeGenes(result);
        if (this.genes.length < 1) {
          alert("No genes found in that slice");
        }
      },
      err => {
        if (err.error) {
          alert(err.error.error);
        } else {
          alert(err.statusText);
        }
      }
    );
    this.loadingGenes = false;
  }

  changeGenes(geneArr: any) {
    this.genes = geneArr.map(
      geneObj =>
        new Gene(
          geneObj.id,
          geneObj.external_name,
          geneObj.description,
          geneObj.seq_region_name,
          geneObj.start,
          geneObj.end
        )
    );
  }

  changeSequence(): void {
    if (this.selectedGene && this.selectedGene["seq"]) {
      this.sequence = this.reverse
        ? this.selectedGene["seq_rev"]
        : this.selectedGene["seq"];
    }
  }

  onSelectGene(gene: Gene): void {
    this.loadingSequence = true;
    this.selectedGene = gene;

    // if we haven't cached sequence for gene
    if (!this.selectedGene.seq) {
      this.geneticQueriesService
        .getGeneSequence(this.selectedGene.gene_id)
        .subscribe(
          geneSeqObj => {
            this.selectedGene = this.genes.find(
              gene => gene.gene_id === geneSeqObj["id"]
            );
            this.selectedGene.setSequence(geneSeqObj["seq"]);
            this.changeSequence();
            this.loadingSequence = false;
          },
          err => {
            if (err.error) {
              alert(err.error.error);
            } else {
              alert(err.statusText);
            }
            this.loadingSequence = false;
          }
        );
    } else {
      this.changeSequence();
      this.loadingSequence = false;
    }
  }

  onChangeReverse(reverseValue: boolean) {
    this.reverse = reverseValue;
    this.changeSequence();
  }
}
