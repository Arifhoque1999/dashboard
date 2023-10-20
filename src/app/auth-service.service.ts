import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public isAuthenticated = false;

  login(username: string, password: string): boolean {
    // Implement your actual login logic here.
    // If login is successful, set isAuthenticated to true.
    this.isAuthenticated = true;
    return true;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
