import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { Training } from '../_models/training';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getLocaleDateFormat } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
  registerForm: FormGroup;
training:Training;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router,private userservice:UserService) { }

  ngOnInit() {
   
    this.registerForm = this.formBuilder.group({
      userName: [],
    id:[],
      skillName: []
  });
 this.userservice.getAll().subscribe(data=>{this.registerForm.patchValue({
   id:data.id,
  
 skillName:data.skillName
 
  })});
  }

   


onSubmit()
{console.log(this.registerForm.value);
  this.userservice.save(this.registerForm.value).subscribe(data=>{this.router.navigate(["/trainerland"])});
}
}
