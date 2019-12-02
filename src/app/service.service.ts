import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Select()
  {
    return this.http.get("http://172.18.5.30:8888/Student")
  }
}
