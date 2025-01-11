import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Message } from 'src/app/interfaces/Message';
import { MessageModalComponent } from '../message-modal/message-modal.component';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate('300ms ease-in')]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class MessageCardComponent {
  @Input() message!: Message;
  constructor(private dialog: MatDialog) {}

  openMessageModal(): void {
    this.dialog.open(MessageModalComponent, {
      data: this.message,
      panelClass: 'custom-dialog-container',
      width: '80%'
    });
  }

    readonly maxChars: number = 80; // Número máximo de caracteres a serem exibidos inicialmente
  showFullText: boolean = false;

  get displayMessage(): string {
    if (this.showFullText || this.message.mensagem.length <= this.maxChars) {
      return this.message.mensagem;
    }
    return this.message.mensagem.substring(0, this.maxChars) + '...';
  }

  toggleText(): void {
    this.showFullText = !this.showFullText;
  }
}
