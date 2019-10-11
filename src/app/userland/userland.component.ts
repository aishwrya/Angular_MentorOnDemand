import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Search } from '../_models/search';
import { Training } from '../_models/training';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../_services/search.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-userland',
  templateUrl: './userland.component.html',
  styleUrls: ['./userland.component.css']
})
export class UserlandComponent implements OnInit {
  registerForm: FormGroup;
  search:Search;
  
  training:Training[];
  constructor(private loginservice: AuthenticationService,private userservice:UserService,private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router,private searchservice:SearchService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [],
    
      start: [],
      end:[]
  });
  }
  onSubmit() {
    this.searchservice.passdata(this.registerForm.value["name"],this.registerForm.value["start"],this.registerForm.value["end"]);
    this.router.navigate(['/search']);
  }
  logout()
  {
    this.loginservice.logOut();
  }
  
  currenttraining()
  {
    this.userservice.currenttraining().subscribe(data => {
      this.training = data;
      console.log(data);
    });
   
    this.router.navigate(['/userprogress']);
  }
  completedtraining()
  {
   
   
    this.router.navigate(['/usercompleted']);
  }

}
