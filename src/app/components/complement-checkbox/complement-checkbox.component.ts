import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-complement-checkbox",
  templateUrl: "./complement-checkbox.component.html",
  styleUrls: ["./complement-checkbox.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ComplementCheckboxComponent implements OnInit {
  checked: boolean = false;
  disabled: boolean = false;

  constructor() {}

  ngOnInit() {}
}
