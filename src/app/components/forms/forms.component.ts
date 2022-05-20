import { Component, OnInit } from '@angular/core';
import { WaterService } from 'src/app/services/water.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  constructor(public waterService: WaterService) { }




  onInit = () => {
    this.waterService.getAllReviews();
  }

  handleReview = () => {
    this.waterService.newReview();
  }


  validateInput = () => {
    if (this.waterService.score>0 && this.waterService.score <= 10) {
      return;
    }
    this.waterService.score = 1;
    alert('please enter a valid score(1-10)')
  }

  ngOnInit(): void {
    this.onInit()
  }

}
