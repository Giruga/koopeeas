import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  template: `
    <mat-sidenav-container class="nav-container">
      <mat-sidenav mode="side" opened class="sidenav">
        <ul>
          <li><a routerLink="/home">Etusivu</a></li>
          <li><a routerLink="/play">Pelaa</a></li>
        </ul>
      </mat-sidenav>
      <mat-sidenav-content class="sidenav-content">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./app-base.component.scss'],
})
export class AppBaseComponent {
  constructor() {}
}
