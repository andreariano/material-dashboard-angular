import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public foods: any;

  constructor() { }

  ngOnInit() {
    this.foods = [
      {id: 1, value: 'apple'},
      {id: 2, value: 'orange'},
      {id: 3, value: 'banana'}
    ]
  }

}
