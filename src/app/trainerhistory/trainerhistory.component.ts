import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { Training } from '../_models/training';

@Component({
  selector: 'app-trainerhistory',
  templateUrl: './trainerhistory.component.html',
  styleUrls: ['./trainerhistory.component.css']
})
export class TrainerhistoryComponent implements OnInit {
training:Training[];
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.userservice.history().subscribe(data=>{this.training=data});
  }


}
