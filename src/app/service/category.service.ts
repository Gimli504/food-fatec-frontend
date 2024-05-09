import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api_config';
import { Observable } from 'rxjs';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url:string = API_CONFIG.urlApi

  constructor(private http:HttpClient) { }
  
  save(category:Category) :Observable<Category[]>{
    return this.http.post<Category[]>(this.url+'/category/create',category)
  }

}
