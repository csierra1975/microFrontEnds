import { Component, OnDestroy,  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { CommunicationService } from '../../../shared-services/src/lib/shared-services/communicationService';
import { Subject, takeUntil } from 'rxjs';

@Component({
  imports: [ RouterModule,CommonModule],
  selector: 'mfe2-component',
  templateUrl: './app.component.html',
  
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponentMfe2 implements OnDestroy {

  private destroy$ = new Subject<void>(); 
  
  constructor(private communicationService: CommunicationService)
  {
    this.communicationService.message$
    .pipe(takeUntil(this.destroy$))  // Se completará cuando destroy$ emita un valor
    .subscribe(message => {
      console.log('Mensaje recibido en MFE2:', message);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();  // Emitimos un valor para completar todas las suscripciones que usen takeUntil
    this.destroy$.complete();  // Finalizamos el Subject
  }

  sendMessage() {
    this.communicationService.sendMessage('Mensaje desde MFE2');
  }

  items: string[] = [
    'Item 1: Información sobre el primer tema',
    'Item 2: Detalles del segundo tema',
    'Item 3: Explicación sobre el tercer tema',
    'Item 4: Información adicional sobre el cuarto tema',
    'Item 5: Reflexiones sobre el quinto tema'
  ];
}
