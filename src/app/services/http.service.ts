import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  // getNews(): Observable<any> {
  //   return this.http.get(
  //     `${environment.url_base}top-headlines?country=pt&apiKey=${environment.api_key}`
  //   )
  // }
}
