import { Component, OnInit } from '@angular/core';
import {Training} from '../_models/training';
import { SearchService } from '../_services/search.service';
import { UserService, User } from '../_services';
import { ProposeData } from '../_models/ProposeData';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
proposedata:ProposeData;
training:Training[];
user:Training;
  constructor(private searchservice:SearchService,private userservice:UserService) { }

  ngOnInit() {
    this.searchservice.getDetails().subscribe(data=>{this.training=data;});

  }
propose(mentorId:bigint,skillName:string)
{
  alert("Proposal sent");
  let currentuser=JSON.parse(localStorage.getItem("user"));
  console.log("user"+currentuser.id);
  console.log("mentor"+mentorId+skillName);
 this.userservice.propose(currentuser.id,mentorId,skillName).subscribe();
  
}
}
