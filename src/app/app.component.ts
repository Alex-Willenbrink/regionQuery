import { Component } from "@angular/core";
import { GeneticQueriesService } from "./services/genetic-queries/genetic-queries.service";
import { Gene } from "./classes/Gene";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  genes: Gene[] = [];

  constructor(private geneticQueriesService: GeneticQueriesService) {}

  ngOnInit() {
    // this.geneticQueriesService.getGeneSequence("ENSG00000146955");
    // this.geneticQueriesService.getOverlapRegions(
    //   "human",
    //   "7:140424943-140624564"
    // );
  }

  onSearch(searchObj) {
    const searchObjExample = {
      species: "human",
      sequenceQuery: "7:140424943-140624564"
    };
    // console.log("searchObj: ", searchObj);
    this.geneticQueriesService
      .getOverlapRegions(searchObjExample)
      .subscribe(result => this.changeGenes(result), err => console.log(err));
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
    console.log("genes: ", this.genes);
  }
}
