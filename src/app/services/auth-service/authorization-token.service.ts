import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationTokenService {
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor() {}

  setTokens(accessToken: string, refreshToken: string): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  // Get the access token
  getAccessToken(): string | null {
    return this.accessToken;
  }

  // Get the refresh token
  getRefreshToken(): string | null {
    return this.refreshToken;
  }

  // Clear tokens from memory
  clearTokens(): void {
    this.accessToken = null;
    this.refreshToken = null;
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!this.accessToken;
  }
}
