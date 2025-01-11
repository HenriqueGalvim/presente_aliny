import { Injectable } from '@angular/core';
import { Message } from '../interfaces/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  private messages: Message[] = [
    {
      nome: 'Nazira',
      mensagem: 'Amo você wgnweingpewngwo´gw~wgemewgm´mweg´mgemweo´mgéwe~~egmg~ewmegmogçwegçeowjwgoweogwegweg~gwemgwemwegmlgm~gemlwm~gmegwem~wegm.',
      fotos: ['assets/maria.jpg','assets/maria.jpg','assets/maria.jpg','assets/maria.jpg'],
    },
    {
      nome: 'Henrique',
      mensagem: 'Amo você .................................................',
      fotos: ['assets/maria.jpg'],
    },
    {
      nome: 'Kamilly',
      mensagem: 'Amo você .................................................',
      fotos: ['assets/maria.jpg'],
    },
    {
      nome: 'Heliam',
      mensagem: 'Amo você .................................................',
      fotos: ['assets/maria.jpg'],
    },
  ];

  getMessages(): Message[] {
    return this.messages;
  }
}
