import { Component, OnInit } from '@angular/core';
// import { AppComponent } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserActivity';
  public Value="";

users=[{"userid":101,"username":"Hari","location":"bangalore"},
{"userid":102,"username":"nag","location":"bangalore"},
{"userid":103,"username":"Kittu","location":"hyderabad"},
{"userid":104,"username":"sai","location":"hyderabad"},
{"userid":105,"username":"sri","location":"bangalore"},
];

}
