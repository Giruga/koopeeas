import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <mat-sidenav-container class="nav-container">
      <mat-sidenav mode="side" opened class="sidenav">
        <ul>
          <li><a routerLink="/home">Home</a></li>
          <li><a routerLink="/play">Play</a></li>
          <li><a routerLink="/scores">Scores</a></li>
        </ul>
      </mat-sidenav>
      <mat-sidenav-content class="sidenav-content">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor() {}
}
