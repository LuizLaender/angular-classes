import { Component, OnInit } from '@angular/core';

import { IteratorExerciseService } from 'app/shared/services/iterator-exercise.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _iteratorExerciseService: IteratorExerciseService
  ) { }

  ngOnInit(): void {
  }

  teste1() {
    console.log('List-->: ', this._iteratorExerciseService.getRandomNumberList());
  }

  teste2() {
    const list = this._iteratorExerciseService.getRandomNumberList();

    //codigo

    // this._iteratorExerciseService.checkBiggerThanAHundred();
  }

  teste3() {
    const list = this._iteratorExerciseService.getRandomNumberList();

    //codigo

    // this._iteratorExerciseService.checkDivisibleByTwo();
  }

}
