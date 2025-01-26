import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Temporal } from 'temporal-polyfill';

import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  router = inject(Router);

  authStorage = new LocalStorageService('auth');

  constructor() {
    const token = this.authStorage.getItem('authToken');
    const isAuthenticated = !!token;
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(isAuthenticated);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
    // console.log('AuthService constructor', { isAuthenticated });
  }

  signin(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      const now = Temporal.Now.plainTimeISO().toString();
      const token = `dummy-token ${now}`; // Replace with actual token from server
      this.authStorage.setItem('authToken', token); // Store the token
      this.isAuthenticatedSubject.next(true); // Update state to authenticated
      return true; // Login successful
    } else {
      return false; // Login failed
    }
  }

  signout(): void {
    this.isAuthenticatedSubject.next(false); // Update state to not authenticated
    this.authStorage.removeItem('authToken'); // Remove the token
    // this.authStorage.clear(); // Clear all storage
    this.router.navigate(['/signin']); // Redirect to signin after signout()
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value; // Synchronously check authentication state
  }
}
