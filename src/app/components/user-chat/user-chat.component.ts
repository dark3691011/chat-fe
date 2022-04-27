import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss'],
})
export class UserChatComponent implements OnInit, OnDestroy {
  users: any;
  names = ['Nam', 'Linh', 'Long', 'Trang'];
  name: any;
  boxs: any = [];
  constructor(private documentService: DocumentService) {}
  ngOnInit(): void {}
  ngOnDestroy(): void {}
  chooseName(name: any) {
    this.name = name;
    this.documentService.setName(name);
  }
  openBox(item: any) {
    let data = {
      baseName: `${item}-${this.name}`,
      name2: item,
      name1: this.name,
    };
    if (
      this.boxs.findIndex((e: any) => e.baseName == `${item}-${this.name}`) ==
      -1
    )
      this.boxs.push(data);
    this.documentService.joinBox(`${this.name}-${item}`);
  }
}
