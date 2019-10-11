import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-adminedit',
  templateUrl: './adminedit.component.html',
  styleUrls: ['./adminedit.component.css']
})
export class AdmineditComponent implements OnInit {

  constructor(private loginservice:AuthenticationService) { }

  ngOnInit() {
  }
  logout()
  {
    this.loginservice.logOut();
  }
}
