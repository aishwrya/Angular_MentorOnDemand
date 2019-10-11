import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Training } from '../_models/training';
@Component({
  selector: 'app-userprogress',
  templateUrl: './userprogress.component.html',
  styleUrls: ['./userprogress.component.css']
})
export class UserprogressComponent implements OnInit {
  training:Training[];

  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.userservice.currenttraining().subscribe(data => {
      this.training = data;
      console.log(data);
    });
  }

}
