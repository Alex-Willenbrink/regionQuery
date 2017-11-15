import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-complement-checkbox",
  templateUrl: "./complement-checkbox.component.html",
  styleUrls: ["./complement-checkbox.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ComplementCheckboxComponent implements OnInit {
  @Output() onChangeReverse: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  changeReverse(reverseValue) {
    // have to emit opposite because click event emits before value changes
    this.onChangeReverse.emit(!reverseValue);
  }
}
