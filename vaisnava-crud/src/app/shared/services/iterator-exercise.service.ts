import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IteratorExerciseService {

  constructor() { }

  public getRandomNumberList(): number[] {

    let out: number[] = [];

    const amount: number = Math.floor(Math.random() * 1001);

    for (let i = 0; i <= amount; i++) {
      out.push(Math.floor(Math.random() * 1001));
    };

    return out;
  }

  public checkBiggerThanAHundred( list: number[] ): boolean {
    if (!list.length) {
      alert('SUA ARRAY ESTA VAZIA');
      return false;
    };

    const out = list.every( item => item > 100 );

    if (!!out) alert('PARABENS! SEU TESTE checkBiggerThanAHundred PASSOU!');

    return out;
  }

  public checkDivisibleByTwo( list: number[] ): boolean {
    if (!list.length) {
      alert('SUA ARRAY ESTA VAZIA');
      return false;
    };

    const out = list.every( item => {
      const restOfDivideByTwo =  item % 2;

      return (restOfDivideByTwo == 0);
    });

    if (!!out) alert('PARABENS! SEU TESTE checkDivisibleByTwo PASSOU!');

    return out;
  }
}
