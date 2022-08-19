import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudoperationfakejson';

  Data=[
    {Id:"1",Name:"Dilnayab",Email:"mohd@gmail.com",Contact:"7346827246",Address:"Bangalore"},
    {Id:"2",Name:"Dilnay",Email:"mohd1@gmail.com",Contact:"7332427246",Address:"Pune"},
    {Id:"3",Name:"nayab",Email:"mohd2@gmail.com",Contact:"735827246",Address:"Goa"},
    {Id:"4",Name:"Dilyab",Email:"mohd3@gmail.com",Contact:"7357627246",Address:"Siraj-e-hind"},
    {Id:"5",Name:"Dil",Email:"mohd4@gmail.com",Contact:"73464657246",Address:"Delhi"},
    {Id:"6",Name:"ayab",Email:"mohd5@gmail.com",Contact:"764527246",Address:"Gujrat"},
    {Id:"7",Name:"naya",Email:"mohd6@gmail.com",Contact:"6827246",Address:"Jaunpur"},
    {Id:"8",Name:"Dilab",Email:"mohd7@gmail.com",Contact:"7827246",Address:"mumbai"},
    {Id:"9",Name:"naya",Email:"mohd8@gmail.com",Contact:"7327246",Address:"Agra"}


  ]
}
