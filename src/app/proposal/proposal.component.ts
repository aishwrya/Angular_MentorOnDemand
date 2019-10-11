import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { ProposeData } from '../_models/ProposeData';
import { Training } from '../_models/training';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
proposedata:ProposeData[];
status:string;
training:Training[];
  constructor(private userservice:UserService) { }

  ngOnInit() {
  
    this.userservice.getproposal().subscribe(data=>{this.proposedata=data});
  }
accept(userId:bigint,mentorId:bigint,skillName:string)
{
  alert("accepted");
 this.status="not completed";
 console.log("val"+userId+mentorId+skillName+this.status);

  this.userservice.store(userId,mentorId,skillName,this.status,).subscribe();
 
}
}
