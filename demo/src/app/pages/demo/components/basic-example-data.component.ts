import { Component } from '@angular/core';

@Component({
  selector: 'basic-example-data',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
export class BasicExampleDataComponent {

  settings = {
    columns: {
      id: {
        title: 'Index'
      },
      name: {
        title: 'Name'
      },
      reference: {
        title: 'Reference'
      }
    },
    actions: {
      position: 'right'
    }
  };

  data = [

    {
      "id": 1,
      "reference":"Action 1",
      "name":"AC_copyPasteElements",
      "description":"",
      "nrInputElements":null,
      "nrInputParameters":null,
      "nrOutputElements":null,
      "nrOutputParameters":null
    },
    {
      "id": 2,
      "reference":"Action 2",
      "name":"AC_checkElementPresent",
      "description":"",
      "nrInputElements":null,
      "nrInputParameters":null,
      "nrOutputElements":null,
      "nrOutputParameters":null
    },
    {
      "id": 3,
      "reference":"Action 3",
      "name":"AC_checkFillFormByValueWithoutSubmit",
      "description":"",
      "nrInputElements":null,
      "nrInputParameters":null,
      "nrOutputElements":null,
      "nrOutputParameters":null
    },
    {
      "id": 4,
      "reference":"hjhjhjhjh",
      "name":"AC_checkGotoPageNewWindowAndClose",
      "description":"",
      "nrInputElements":null,
      "nrInputParameters":null,
      "nrOutputElements":null,
      "nrOutputParameters":null
    },
    {
      "id": 5,
      "reference":"qqqqq",
      "name":"AC_clearForm",
      "description":"",
      "nrInputElements":null,
      "nrInputParameters":null,
      "nrOutputElements":null,
      "nrOutputParameters":null
    },
    {
      "id": 6,
      "reference":"dfrtg",
      "name":"AC_checkFillFormByValueWithoutSubmit",
      "description":"",
      "nrInputElements":null,
      "nrInputParameters":null,
      "nrOutputElements":null,
      "nrOutputParameters":null
    },
    {
      "id": 7,
      "reference":"Action 4",
      "name":"AC_checkFillFormWithoutSubmit",
      "description":"",
      "nrInputElements":null,
      "nrInputParameters":null,
      "nrOutputElements":null,
      "nrOutputParameters":null
    },
    {
      "id": 8,
      "reference":"ddd",
      "name":"CheckElementClick",
      "description":"",
      "nrInputElements":null,
      "nrInputParameters":null,
      "nrOutputElements":null,
      "nrOutputParameters":null
    },
    {
      "id": 9,
      "reference":"fgfgfgf",
      "name":"AC_checkElementsPresent",
      "description":"",
      "nrInputElements":null,
      "nrInputParameters":null,
      "nrOutputElements":null,
      "nrOutputParameters":null
    },
    {
      "id": 10,
      "reference":"Action 5",
      "name":"CheckElementClick",
      "description":"",
      "nrInputElements":null,
      "nrInputParameters":null,
      "nrOutputElements":null,
      "nrOutputParameters":null
    },
    {
      "id": 11,
      "reference":"acttt",
      "name":"CheckElementClick",
      "description":"",
      "nrInputElements":null,
      "nrInputParameters":null,
      "nrOutputElements":null,
      "nrOutputParameters":null
    },
    {
      "id": 12,
      "reference":"page check",
      "name":"AC_checkGotoPage",
      "description":""
    },
    {
      "id": 13,
      "reference":"END",
      "name":"END",
      "description":"END",
      "nrInputElements":null,
      "nrInputParameters":null,
      "nrOutputElements":null,
      "nrOutputParameters":null
    },
  ];
  // data = [
  //   {
  //     id: 1,
  //     name: "Leanne Graham",
  //     username: "Bret",
  //     email: "Sincere@april.biz"
  //   },
  //   {
  //     id: 2,
  //     name: "Ervin Howell",
  //     username: "Antonette",
  //     email: "Shanna@melissa.tv"
  //   },
  //   {
  //     id: 3,
  //     name: "Clementine Bauch",
  //     username: "Samantha",
  //     email: "Nathan@yesenia.net"
  //   },
  //   {
  //     id: 4,
  //     name: "Patricia Lebsack",
  //     username: "Karianne",
  //     email: "Julianne.OConner@kory.org"
  //   },
  //   {
  //     id: 5,
  //     name: "Chelsey Dietrich",
  //     username: "Kamren",
  //     email: "Lucio_Hettinger@annie.ca"
  //   },
  //   {
  //     id: 6,
  //     name: "Mrs. Dennis Schulist",
  //     username: "Leopoldo_Corkery",
  //     email: "Karley_Dach@jasper.info"
  //   },
  //   {
  //     id: 7,
  //     name: "Kurtis Weissnat",
  //     username: "Elwyn.Skiles",
  //     email: "Telly.Hoeger@billy.biz"
  //   },
  //   {
  //     id: 8,
  //     name: "Nicholas Runolfsdottir V",
  //     username: "Maxime_Nienow",
  //     email: "Sherwood@rosamond.me"
  //   },
  //   {
  //     id: 9,
  //     name: "Glenna Reichert",
  //     username: "Delphine",
  //     email: "Chaim_McDermott@dana.io"
  //   },
  //   {
  //     id: 10,
  //     name: "Clementina DuBuque",
  //     username: "Moriah.Stanton",
  //     email: "Rey.Padberg@karina.biz"
  //   },
  //   {
  //     id: 11,
  //     name: "Nicholas DuBuque",
  //     username: "Nicholas.Stanton",
  //     email: "Rey.Padberg@rosamond.biz"
  //   }
  // ];
}
