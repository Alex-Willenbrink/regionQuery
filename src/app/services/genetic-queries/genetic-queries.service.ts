import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GeneticQueriesService {
  private base_url: string = "https://rest.ensembl.org";
  private json_param: string = "content-type=application/json";

  constructor(private http: HttpClient) {}

  // getGeneSequence(geneId: string): void {
  //   this.http
  //     .get(`${this.base_url}/sequence/id/${geneId}?${this.json_param}`)
  //     .subscribe(result => console.log(result), err => console.log(err));
  // }

  // getGeneSequences(): void {
  //   const url = `${this.base_url}/sequence/id?${this.json_param}`;
  //   const body = { ids: ["ENSG00000157764", "ENSG00000248378"] };
  //   const headers = new HttpHeaders().set("Content-Type", "application/json");
  //   headers.set("Accept", "application/json");
  //   console.log("headers: ", headers);
  //   // const httpOptions = {
  //   //   headers: new HttpHeaders({ "Content-Type": "application/json" })
  //   // };
  //   this.http
  //     .post(url, body, { headers })
  //     .subscribe(result => console.log(result), err => console.log(err));
  // }

  getOverlapRegions(searchObj: any): Observable<Object> {
    const { species, sequenceQuery } = searchObj;
    return this.http.get(
      `${this
        .base_url}/overlap/region/${species}/${sequenceQuery}?feature=gene;${this
        .json_param}`
    );

    // .subscribe(result => console.log(result), err => console.log(err));
  }
}
