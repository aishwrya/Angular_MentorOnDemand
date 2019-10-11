import { Component, OnInit } from '@angular/core';
import { Training } from '../_models/training';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-usercompleted',
  templateUrl: './usercompleted.component.html',
  styleUrls: ['./usercompleted.component.css']
})
export class UsercompletedComponent implements OnInit {
  training:Training[];
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.userservice.completedtraining().subscribe(data => {
      this.training = data;
  });

}}
