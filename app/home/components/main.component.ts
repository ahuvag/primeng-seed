import {Component, SystemJsNgModuleLoader, Compiler} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: "my-home-main",
  moduleId: module.id,
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent {
  contacts: Contact[];

  constructor() {
  }

  ngOnInit() {
    this.contacts = [
      {id:1, name: "Ori", email:"xxx"},
      {id:2, name: "Roni", email: "yyy"},
    ]
  }
}

interface Contact {
  id: number;
  name: string;
  email: string;
}
