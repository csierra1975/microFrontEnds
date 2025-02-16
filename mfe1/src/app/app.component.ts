import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommunicationService } from '../../../shared-services/src/lib/shared-services/communicationService';
import { Subject, takeUntil } from 'rxjs';

@Component({
  imports: [RouterModule],
  selector: 'mfe1-component',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponentMfe1 implements OnDestroy {
  title = 'mfe1';
  private destroy$ = new Subject<void>(); 
  
  constructor(private communicationService: CommunicationService){
    this.communicationService.message$
    .pipe(takeUntil(this.destroy$))  // Se completará cuando destroy$ emita un valor
    .subscribe(message => {
      console.log('Mensaje recibido en MFE1:', message);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();  // Emitimos un valor para completar todas las suscripciones que usen takeUntil
    this.destroy$.complete();  // Finalizamos el Subject
  }

  sendMessage() {
    this.communicationService.sendMessage('Mensaje desde MFE1');
  }
}
