import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaterService {



  constructor(private HttpService: HttpClient) { }

  getAllReviews = () => {
    const observable = this.HttpService.get('http://localhost:3001/example');
    observable.subscribe(response => {
      console.log(response)
    })
    
  }

}
