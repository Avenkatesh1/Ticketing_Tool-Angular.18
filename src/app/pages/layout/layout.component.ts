import { Component } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  // router = inject(Router);
  constructor(private router: Router) {}
  onLogOff() {
    localStorage.removeItem('ticketUser');
    this.router.navigateByUrl('login');
  }
}
