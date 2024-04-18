import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token = 'ey...'

  getToken(): string {
    return this.token;
  }
}
