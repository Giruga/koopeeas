import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScoresService } from 'src/app/services/scores.service';

export enum Phase {
  BEGINNING,
  THINK,
  PICK,
  RESULTS
}

export enum Selections {
  KIVI,
  PAPERI,
  SAKSET
}

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  currentPhase: Phase | undefined;
  userSelection: Selections | undefined;
  compSelection: Selections | undefined;

  selectionEnabled = false;

  interval: any;
  resultText: string = '';
  timeLeft: number;

  constructor(private readonly scoresService: ScoresService) {
    this.timeLeft = 0;
    this.resetGame();
  }

  ngOnInit(): void {}

  startGame() {
    this.resetGame();
    this.thinkPhase();
  }

  resetGame() {
    this.currentPhase = Phase.BEGINNING;
    this.userSelection = undefined;
    this.compSelection = undefined;
  }

  private thinkPhase() {
    this.currentPhase = Phase.THINK
    this.timeLeft = 2;
    this.interval = setInterval(() => {
      this.timeLeft -= 0.05;
      if (this.timeLeft <= 0) {
        this.timeLeft = 0;
        clearInterval(this.interval);
        this.pickPhase();
      }
    }, 50);
  }

  private pickPhase() {
    this.currentPhase = Phase.PICK;

    this.selectionEnabled = true;

    this.timeLeft = 1;
    this.interval = setInterval(() => {
      this.timeLeft -= 0.05;
      if (this.timeLeft <= 0) {
        this.timeLeft = 0;
        clearInterval(this.interval);
        this.resultsPhase();
      }
    }, 50);
  }

  resultsPhase() {
    this.generateComputerSelection();
    this.resultText = this.calculateTulos();
    this.currentPhase = Phase.RESULTS;
  }

  calculateTulos(): string {
    if (((this.compSelection as number) + 1) % 3 == this.userSelection) {
      this.scoresService.addResult(1);
      return 'Voitit!';
    } else if (this.compSelection == this.userSelection) {
      this.scoresService.addResult(0);
      return 'Tasuri';
    } else {
      this.scoresService.addResult(-1);
      return 'Hävisit!';
    }
  }

  generateComputerSelection() {
    this.compSelection = Math.floor(Math.random() * 3);
  }

  selectWeapon(valinta: Selections) {
    if (this.selectionEnabled)
      this.userSelection = valinta;
  }

  getSelectionText(valinta: Selections | undefined): string {
    return valinta != null ? Selections[valinta].toString() ?? '' : '';
  }

  get getPhase() : typeof Phase {
    return Phase
  }
}
