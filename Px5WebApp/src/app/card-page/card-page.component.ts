import { Component } from '@angular/core';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent {

  tableContent = [
    { first: "Personina", last: "Fake", street: "Lorem ipsum Strasse 12", plz: "1234", city: "Loremstadt" },
    { first: "Sandra", last: "Meier", street: "Lorem ipsum Strasse 24", plz: "1234", city: "Loremstadt" },
    { first: "Thomas", last: "Muster", street: "Lorem ipsum Strasse 36", plz: "1234", city: "Loremstadt" },
    { first: "Lea", last: "MusterMitÜberlangemNamenDerInDerCardKeinenPlatzHat", street: "Lorem ipsum Strasse 48", plz: "1234", city: "Loremstadt" },
    { first: "Peter", last: "Müller", street: "Lorem ipsum Strasse 64", plz: "1234", city: "Loremstadt" },
    { first: "Personina", last: "Fake", street: "Lorem ipsum Strasse 12", plz: "1234", city: "Loremstadt" },
    { first: "Sandra", last: "Meier", street: "Lorem ipsum Strasse 24", plz: "1234", city: "Loremstadt" },
    { first: "Thomas", last: "Muster", street: "Lorem ipsum Strasse 36", plz: "1234", city: "Loremstadt" },
  ];

  pics = [
    "demopic1.jpg",
    "demopic2.jpg",
    "demopic3.jpg",
    "demopic4.jpg"
  ];

}
