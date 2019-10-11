import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { UserService } from '../_services';
import { BlockingProxy } from 'blocking-proxy';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
user:User;
  constructor(private userservice:UserService) { }

  ngOnInit() {
   this.getuser();
  }


Block(id:number)
{console.log(id);
 
  this.userservice.block(id).subscribe(data=>{this.getuser()});
  
}
getuser()
{
  this.userservice.getUser().subscribe(data=>{this.user=data});
}
}