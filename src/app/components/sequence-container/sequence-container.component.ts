import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sequence-container",
  templateUrl: "./sequence-container.component.html",
  styleUrls: ["./sequence-container.component.css"]
})
export class SequenceContainerComponent implements OnInit {
  @Input() sequence: string;
  constructor() {}

  ngOnInit() {}
}
