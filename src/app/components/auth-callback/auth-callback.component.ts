import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth-service.module';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { AuthorizationTokenService } from '../../services/auth-service/authorization-token.service';
import { AuthorizationInfo } from '../../models/auth/AuthorizationInfo';
import { ErrorMessage } from '../../models/auth/ErrorMessage';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [],
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.scss',
})
export class AuthCallbackComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private authTokenService: AuthorizationTokenService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get('code');

      if (authorizationCode) {
        this.authService
          .exchangeAuthorizationCodeForToken(authorizationCode)
          .subscribe({
            next: (response: AuthorizationInfo) => {
              this.authTokenService.setTokens(
                response.accessToken,
                response.refreshToken
              );

              console.log(this.authTokenService.getAccessToken());
              console.log(this.authTokenService.getRefreshToken());

              // this.router.navigate(['/dashboard']);
            },
            error: (err: ErrorMessage) => {
              console.log(err);
            },
          });
      }
    }
  }
}
