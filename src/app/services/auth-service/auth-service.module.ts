import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceModule {
  private responseType = 'code';
  private scope = 'openid offline_access profile email';
  private state = 'random_string_for_csrf';

  constructor(private http: HttpClient) {}

  // login(): Observable<any> {
  //   const body = new HttpParams()
  //     .set('grant_type', 'client_credentials')
  //     .set('client_id', environment.clientId)
  //     .set('client_secret', environment.clientSecret)
  //     .set('scope', 'openid offline_access profile email'); // Add your desired scope
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   });

  //   const respon = this.http.post(environment.tokenUri, body.toString(), {
  //     headers,
  //   });

  //   return respon;
  // }

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

  exchangeAuthorizationCodeForToken(code: string) {
    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('client_id', environment.clientId)
      .set('client_secret', environment.clientSecret)
      .set('redirect_uri', environment.redirectUri)
      .set('scope', 'openid offline_access');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    // this.http
    //   .post(environment.tokenUri, body.toString(), {
    //     headers,
    //   })
    //   .subscribe((response) => {
    //     const accessToken = response;
    //     console.log('Access Token:', accessToken);
    //     // Store the access token for subsequent requests
    //   });

    this.http
      .post(`https://localhost:7061/retrieve-token/?code=${code}`, {
        headers,
      })
      .subscribe((response) => {
        const accessToken = response;
        console.log('Access Token:', accessToken);
        // Store the access token for subsequent requests
      });

    // this.http
    //   .post(environment.tokenUri, body.toString(), {
    //     headers,
    //   })
    //   .subscribe((response) => {
    //     const accessToken = response;
    //     console.log('Access Token:', accessToken);
    //     // Store the access token for subsequent requests
    //   });
    // // Assuming you received the code in the URL
    // const url = new URL(window.location.href);
    // url.searchParams.delete('code'); // Remove the 'code' parameter from the URL

    // // Update the browser's URL without reloading the page
    // window.history.replaceState({}, '', url.toString());

    localStorage.setItem('logged', '1');
  }
}
