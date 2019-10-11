import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Technology } from '../_models/technology';
import { Observable } from 'rxjs';
 
@Injectable()
export class TechnologyService {
 
  private listUrl: string;
  private addUrl: string;
 private updateUrl:string;
 private deleteUrl:string;
  constructor(private http: HttpClient) {
    this.listUrl = 'http://localhost:8085/technology/list';
    this.addUrl = 'http://localhost:8085/technology/add';
    this.updateUrl = 'http://localhost:8085/technology/update';
    this.deleteUrl = 'http://localhost:8085/technology/remove';
  

  }
 
  public findAll(): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.listUrl);
  }
 
  public save(technology: Technology) {
    return this.http.post<Technology>(this.addUrl, technology,{responseType:'text' as 'json'});
  }
  public update(technology: Technology){
    return this.http.put(this.updateUrl, technology,{responseType:'text'});
  }
  public delete(id:string) {
    return this.http.delete(this.deleteUrl+ "/"+ id,{responseType:'text'});
  }
}