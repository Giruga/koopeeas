import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScoresService } from '@services';
import { Subscription } from 'rxjs';
import { ScoreState } from 'src/app/services/stores/scores.store';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss'],
})
export class ScoresComponent {
  scoreState: ScoreState | null = null;

  constructor(private readonly scoresService: ScoresService) {
    scoresService.gameState$.subscribe((newState) => {
      this.scoreState = newState;
    });
  }

  calculateTasurit(): number {
    return this.scoreState
      ? this.scoreState.gameCount -
          this.scoreState.victories -
          this.scoreState.defeats
      : 0;
  }
}
