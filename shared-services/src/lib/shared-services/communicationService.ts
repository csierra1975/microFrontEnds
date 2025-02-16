import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class CommunicationService 
{
    private messageSource = new Subject<string>();
    message$ = this.messageSource.asObservable();
  
    sendMessage(message: string) {
      this.messageSource.next(message);
    }
}// Definimos una señal de tipo string
