import { Injectable } from '@angular/core';
import { Message } from '../interfaces/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  private messages: Message[] = [
    {
      nome: 'Henrique',
      mensagem: 'Primeiramente feliz aniversário querida, construí esse site pra guardar diversas mensagens e momentos tantos meus quanto de quem quiser participar e deixar recadinhos pra você',
      fotos: ['assets/snop.jpg'],
    },
    {
      nome: 'Henrique',
      mensagem: 'Sei que tem sido dificil esses tempos, criei esse espaço pensando que poderia te deixar mais animada, ter um ambiente cheio de mensagens de afeto e carinho pra você',
      fotos: ['assets/snop2.jpg'],
    },
    {
      nome: 'Henrique',
      mensagem: 'Sou muito feliz por ter você como amiga, me preocupo bastante contigo por isso encho teu saco perguntando se já comeu ou se bebeu água, tu tem mania de esquecer quando fica fazendo as coisas',
      fotos: ['assets/snop3.jpg'],
    },
    {
      nome: 'Henrique',
      mensagem: 'Já passamos por tanta coisa, agradeço por tudo que fez e faz, tu não tem ideia do quanto já me ajudou. Se eu sou quem sou hoje, com certeza tem influência tua nisso.',
      fotos: ['assets/snop4.jpg'],
    },
    {
      nome: 'Henrique',
      mensagem: 'Vou alimentar esse site diariamente e melhorar ele com o tempo. Espero que possa ajudar você a passar pelos momentos dificeis. Nunca se esqueça, você não esta sozinha.',
      fotos: ['assets/snop5.jpg'],
    },
    {
      nome: 'Nana',
      mensagem: 'Sabe que seu dia é mais do que especial, não é? Aniversário da pessoa mais importante da minha vida! E que vamos continuar comemorando toooodos os anos ❤️',
      fotos: ['assets/snop6.jpeg'],
    },
    {
      nome: 'Nana',
      mensagem: 'Todo dia é dia de te mostrar o quanto você significa, o quanto você é importante. E palavras e gestos nunca deixarão de ser mostrados ❤️',
      fotos: ['assets/snop7.jpg'],
    },
    {
      nome: 'Nana',
      mensagem: 'Cada dia que passa, só sei te amar mais, sentir mais e ser grata por você. Quero dividir o resto da minha vida com você, a pessoa que mais amor no mundo!',
      fotos: ['assets/fofas.jpeg'],
    },
  ];

  getMessages(): Message[] {
    return this.messages;
  }
}
