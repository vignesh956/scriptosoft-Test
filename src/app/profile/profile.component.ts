import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  ProfileCategorylist = [
    {
      name: 'My Profile'
    },
    {
      name: 'Overview'
    },
    {
      name: 'Reviews'
    },
    {
      name: 'Help'
    },
  ]
  constructor() { }

  ngOnInit() {}
  alert(){
    
  }
}
