import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth-service.module';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  authenticate() {
    this.authService.authenticate();
  }

  logout() {
    this.authService.logout();
  }

  isAuthSessionActive() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('logged') === '1';
    }
    return false;
  }
}
