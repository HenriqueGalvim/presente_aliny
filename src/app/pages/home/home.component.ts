import { Component, ElementRef, ViewChild } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Message } from 'src/app/interfaces/Message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  messages: Message[] = [];
  constructor(private messageService: MessageService) {
    this.messages = this.messageService.getMessages();
  }
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 500,
    point: {
      visible: true
    },
    load: 2,
    loop: true,
    touch: true,
    interval: { timing: 3000 },
    animation: 'lazy'
  };
}
