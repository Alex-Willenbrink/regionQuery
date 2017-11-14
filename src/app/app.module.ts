import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { AppComponent } from "./app.component";
import { SpeciesDropdownComponent } from "./components/species-dropdown/species-dropdown.component";
import { SearchFieldComponent } from "./components/search-field/search-field.component";
import { SearchButtonComponent } from "./components/search-button/search-button.component";
import { GeneTableComponent } from "./components/gene-table/gene-table.component";
import { ComplementCheckboxComponent } from "./components/complement-checkbox/complement-checkbox.component";
import { SequenceContainerComponent } from "./components/sequence-container/sequence-container.component";
import { GeneticQueriesService } from "./services/genetic-queries/genetic-queries.service";
import { QueryContainerComponent } from "./components/query-container/query-container.component";

// import { Gene } from "./classes/Gene";

@NgModule({
  declarations: [
    AppComponent,
    SpeciesDropdownComponent,
    SearchFieldComponent,
    SearchButtonComponent,
    GeneTableComponent,
    ComplementCheckboxComponent,
    SequenceContainerComponent,
    QueryContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [GeneticQueriesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
