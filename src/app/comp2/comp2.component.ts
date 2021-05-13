import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users=[
    {"userid":101,"username":"abhi","location":"bangalore"},
    {"userid":102,"username":"nag","location":"bangalore"},
    {"userid":103,"username":"Kittu","location":"hyderabad"},
    {"userid":104,"username":"sai","location":"hyderabad"},
    {"userid":105,"username":"sri","location":"bangalore"},
    ];

}
