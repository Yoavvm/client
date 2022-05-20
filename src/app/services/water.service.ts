import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaterService {

  floor: number = 1;
  score: number = 1;
  user: string = '';

  reviews: any = [];

  constructor(private HttpService: HttpClient) { }

  getAllReviews = () => {
    const observable = this.HttpService.get('http://localhost:3001/example');
    observable.subscribe(response => {
      this.reviews = response;
    })

  }

  newReview = () => {
    if (this.user == '') {
      return alert('please enter a valid name');
    }
    const observable = this.HttpService.post('http://localhost:3001/example', { reviewFloor: this.floor, reviewScore: this.score, reviewOwner: this.user });
    observable.subscribe(response => {
      this.reviews = response;
    })
  }

  deleteReview = () => {
    const observable = this.HttpService.delete(`http://localhost:3001/example/`)
    observable.subscribe(response => {
      this.reviews = response;
    })
  }

}
