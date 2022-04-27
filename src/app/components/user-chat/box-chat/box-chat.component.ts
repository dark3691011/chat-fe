import { DocumentService } from 'src/app/services/document.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-chat',
  templateUrl: './box-chat.component.html',
  styleUrls: ['./box-chat.component.scss'],
})
export class BoxChatComponent implements OnInit {
  @Input() name: any;
  text: any;
  messages: any = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.message.subscribe((message: any) => {
      console.log(message);
      if (
        (message.name1 == this.name.name1 &&
          message.name2 == this.name.name2) ||
        (message.name2 == this.name.name1 && message.name1 == this.name.name2)
      ) {
        this.messages.push(message);
      }
    });
  }

  sendMessage() {
    this.documentService.sendMessage({
      name1: this.name.name1,
      name2: this.name.name2,
      content: this.text,
    });
  }
}
