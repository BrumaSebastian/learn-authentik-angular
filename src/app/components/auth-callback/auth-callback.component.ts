import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { AuthServiceModule } from '../../services/auth-service/auth-service.module';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [],
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.scss',
})
export class AuthCallbackComponent implements OnInit {
  constructor(
    private authService: AuthServiceModule,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get('code');

      if (authorizationCode) {
        this.authService.exchangeAuthorizationCodeForToken(authorizationCode);
      }
    }
  }
}
