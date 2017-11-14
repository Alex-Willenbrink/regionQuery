import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-sequence-container",
  templateUrl: "./sequence-container.component.html",
  styleUrls: ["./sequence-container.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class SequenceContainerComponent implements OnInit {
  sequence: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  constructor() {}

  ngOnInit() {}
}