import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ScoreState {
  gameCount: number;
  victories: number;
  defeats: number;
}

@Injectable({
  providedIn: 'root',
})
export class ScoresStore {
  private currentState: ScoreState = {
    gameCount: 0,
    victories: 0,
    defeats: 0,
  };

  private scoreState = new BehaviorSubject<ScoreState>(this.currentState);
  scoreState$: Observable<ScoreState>;

  constructor() {
    this.scoreState$ = this.scoreState.asObservable();

    this.scoreState$.subscribe((newState) => {
      if (newState) this.currentState = newState;
    });
  }

  addResult(tulos: number) {
    switch (tulos) {
      case -1:
        this.currentState.defeats += 1;
        break;
      case 1:
        this.currentState.victories += 1;
    }

    this.currentState.gameCount += 1;
    this.scoreState.next(this.currentState);
  }
}
