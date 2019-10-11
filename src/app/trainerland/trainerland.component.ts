import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-trainerland',
  templateUrl: './trainerland.component.html',
  styleUrls: ['./trainerland.component.css']
})
export class TrainerlandComponent implements OnInit {

  constructor(private loginservice: AuthenticationService,private userservice:UserService,private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
  }
logout()
{
  this.loginservice.logOut();
}
edit()
{
  this.router.navigate(["/editskill"]);
}
proposal()
{ 
  this.router.navigate(['/proposal']);
 
}
}
