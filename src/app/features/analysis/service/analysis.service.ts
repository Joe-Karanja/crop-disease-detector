import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor(private http: HttpClient) { }
  // url = 'https://test-api.ekenya.co.ke/';
  url = '167.99.207.144:81/'
  // Url ='http://127.0.0.1:8000/';
  // Url ='http://10.20.2.31:8000/';
  Url = '167.99.207.144:81/'

  getData(endpoint: string){
    return this.http.get(this.url + endpoint);
  }

  getAnalysis(endpoint: string){
    return this.http.get(this.url + endpoint);
  }

  postAnalysis(endpoint: string, model: any){
    return this.http.post(this.url + endpoint, model);
  }

  Analysis(endpoint: string, model: any){
    return this.http.post(this.url + endpoint, model);
  }
}
