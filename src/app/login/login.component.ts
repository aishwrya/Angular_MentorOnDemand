import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, UserService } from '../_services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username = ''
  password = ''
  invalidLogin = false

    loading = false;
    submitted = false;
    returnUrl: string;
  constructor( private formBuilder: FormBuilder,private router: Router,private userservice:UserService,
    private loginservice: AuthenticationService,private alertService: AlertService,private authService: AuthenticationService) { }

  ngOnInit() {
this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
  }

  onSubmit() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
       
        console.log(this.username);
        console.log(this.password);
   
        let currentuser=JSON.parse(localStorage.getItem("user"));
      
          this.userservice.passdata(currentuser.id);
          console.log(currentuser.id);
          if(currentuser.active)
          {
                    if(currentuser.role=='admin')
                    this.router.navigate(['/adminedit']);
                    else if(currentuser.role=='user')
                    this.router.navigate(['/userland']);
                    else if(currentuser.role=='mentor')
                    this.router.navigate(['/trainerland']);
        this.invalidLogin = false
      }
      else
      {
    alert("User Blocked")
      };
    },
      error => {
        this.invalidLogin = true
        alert("Bad Credentials");
        this.loginForm.reset();
        this.loading = false;
      }
    )
    );

  }

}
