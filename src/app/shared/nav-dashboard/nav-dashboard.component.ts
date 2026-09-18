import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-nav-dashboard',
  styleUrl: './nav-dashboard.component.css',
  templateUrl: './nav-dashboard.component.html',
})
export class NavDashboardComponent {}
