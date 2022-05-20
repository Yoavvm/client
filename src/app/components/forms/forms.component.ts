import { Component, OnInit } from '@angular/core';
import { WaterService } from 'src/app/services/water.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  constructor(private waterService: WaterService) { }

  onInit = () => {
    this.waterService.getAllReviews()
  }

  floor: number = 1;
  score: number = 1;

  validateInput = () => {
    if (this.score>0 && this.score <= 10) {
      return;
    }
    alert('please enter a valid score(1-10)')
  }

  validateFloor = () => {
    if (this.floor>0 && this.floor <= 6) {
      return;
    }
    alert('please enter a valid floor(1-6)')
  }

  ngOnInit(): void {
    this.onInit()
  }

}
