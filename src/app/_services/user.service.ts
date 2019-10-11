import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';
import { Training } from '../_models/training';
import { Observable } from 'rxjs';
import { ProposeData } from '../_models/ProposeData';

@Injectable()
export class UserService {
    progressUrl: string;
    completedUrl: string;
    _userId:bigint;
    listUrl:string;
    updateUrl:string;
    displayUrl:string;
    blockUrl:string;
    historyUrl:string;
    proposeUrl:string;
    addUrl:string;
    constructor(private http: HttpClient) {
        this.progressUrl = 'http://localhost:8085/training/progress';
        this.completedUrl = 'http://localhost:8085/training/completed';
        this.listUrl = 'http://localhost:8085/training/list';
        this.updateUrl = 'http://localhost:8085/training/update';
        this.displayUrl = 'http://localhost:8085/user/list';
        this.blockUrl = 'http://localhost:8085/user/block';
        this.historyUrl = 'http://localhost:8085/training/history';
        this.proposeUrl = 'http://localhost:8085/training/propose';
        this.addUrl = 'http://localhost:8085/training/add';
     }
     public passdata(userId){
        this._userId=userId;
       
       }
    getAll() {
        
        return this.http.get<Training>(this.listUrl+"/"+this._userId);
        
    }
    getUser()
    {
        return this.http.get<User>(this.displayUrl);
    }
  
       block(id:number)
       {
           return this.http.get(this.blockUrl+"/"+id,{responseType:'text'})
       }
currenttraining(): Observable<Training[]> {
    return this.http.get<Training[]>(this.progressUrl+"/"+this._userId);
    }
    completedtraining(): Observable<Training[]> {
        return this.http.get<Training[]>(this.completedUrl+"/"+this._userId);
        }
  public  save(training: Training) {
        return this.http.put(this.updateUrl,training,{responseType:'text'});
    }

   history() {
        return this.http.get<Training[]>(this.historyUrl+"/"+this._userId);
    }
public getproposal()
{
    return this.http.get<ProposeData[]>(this.proposeUrl+"/"+this._userId);
}
    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/` + id);
    }
    propose(uid:bigint,mid:bigint,sname:string)
    {
        return this.http.get(this.proposeUrl+"/"+uid+"/"+mid+"/"+sname);
        
        
    }
    store(userId:bigint,mentorId:bigint,skillName:string,status:string)
    {
        return this.http.get(this.addUrl+"/"+userId+"/"+mentorId+"/"+skillName+"/"+status);
        
    }
}