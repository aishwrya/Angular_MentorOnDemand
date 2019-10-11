import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService ,AuthenticationService, User} from '../_services';

@Component({templateUrl: 'usersignup.component.html',
styleUrls: ['./usersignup.component.css']})
export class UsersignupComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private authenticationservice:AuthenticationService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
           
           role:['user'],
            userName: ['', Validators.required],
          
            password: ['', [Validators.required, Validators.minLength(6)]],
            lastName:['',Validators.required],
            contactNumber:[]

        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
          this.alertService.error('Invalid Form');
            return;
        }

        
            this.authenticationservice.register(this.registerForm.value).subscribe(
                data => {
                   
                    this.router.navigate(['/login']);
                    alert('Registration successful');
                },
                error => {
                    alert("UserName already taken");
                    this.registerForm.reset();
                    this.loading = false;
                });
           
               
          
          
            }     
}