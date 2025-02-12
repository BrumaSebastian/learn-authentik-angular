import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learn-authentik-angular';

  constructor() {
    // this.oauthService.configure({
    //   clientId: 'nE5oG8lPWZNPs7yxF8o46dRu8lTyeohKDVDBwupF',
    //   // clientSecret: 'your-client-secret',
    //   redirectUri: 'http://localhost:4200/callback',
    //   // authorizationEndpoint: 'https://your-authentik-instance/oauth2/authorize',
    //   tokenEndpoint: 'http://localhost:9000/angular-client/o/token/',
    //   scope: 'openid profile email',
    //   responseType: 'code',
    //   oidc: true, // Enable OIDC flow
    // });
    // Load the discovery document
    // this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
