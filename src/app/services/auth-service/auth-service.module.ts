import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private responseType = 'code';
  private scope = 'openid offline_access profile email';
  private state = 'random_string_for_csrf';

  constructor(private http: HttpClient) {}

  authenticate() {
    const authRedirectUrl =
      `${environment.authUri}?` +
      `client_id=${environment.clientId}&` +
      `response_type=${this.responseType}&` +
      `redirect_uri=${environment.redirectUri}&` +
      `scope=${this.scope}&` +
      `state=${this.state}`;

    window.location.href = authRedirectUrl;
  }

  logout() {
    const logoutUrl = `${environment.logoutUri}?redirect_uri=${environment.redirectUri}`;
    localStorage.removeItem('logged');
    window.location.href = logoutUrl;
  }

  exchangeAuthorizationCodeForToken(code: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(
      `https://localhost:7061/retrieve-token/?code=${code}`,
      { headers }
    );
  }
}
