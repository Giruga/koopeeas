import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScoreState, ScoresStore } from './stores/scores.store';

@Injectable({
  providedIn: 'root',
})
export class ScoresService {
  gameState$: Observable<ScoreState>;

  constructor(private readonly scoresStore: ScoresStore) {
    this.gameState$ = scoresStore.scoreState$;
  }

  addResult(tulos: number) {
    this.scoresStore.addResult(tulos);
  }
}
