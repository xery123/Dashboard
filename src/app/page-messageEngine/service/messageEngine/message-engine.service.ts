import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IMessage } from '../../interface/message-items';
import { TokenService } from '../token';

@Injectable({
  providedIn: 'root'
})
export class MessageEngineService {

  private readonly URL_MESSAGE = 'http://localhost:4200/assets/message-engine.json';

  http = inject(HttpClient);

  constructor(private tokenService: TokenService) { console.log('messageService');}

  getMessage(){
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<IMessage>(this.URL_MESSAGE,{ headers })
  }

}
