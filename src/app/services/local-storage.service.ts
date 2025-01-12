import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private prefix: string;

  constructor(@Inject(String) prefix: string = '') {
    this.prefix = prefix;
  }

  private getPrefixedKey(key: string): string {
    return `${this.prefix}_${key}`;
  }

  getItem(key: string): string | null {
    return localStorage.getItem(this.getPrefixedKey(key));
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(this.getPrefixedKey(key), value);
  }

  getNumber(key: string): number {
    const number = +(localStorage.getItem(this.getPrefixedKey(key)) ?? 0);
    return number;
  }

  setNumber(key: string, value: number): void {
    localStorage.setItem(this.getPrefixedKey(key), value.toString());
  }

  removeItem(key: string): void {
    localStorage.removeItem(this.getPrefixedKey(key));
  }

  clear(): void {
    Object.keys(localStorage)
      .filter((key) => key.startsWith(this.prefix))
      .forEach((key) => localStorage.removeItem(key));
  }
}
