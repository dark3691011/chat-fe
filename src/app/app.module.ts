import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentComponent } from './components/document/document.component';
import { UserChatComponent } from './components/user-chat/user-chat.component';
import { BoxChatComponent } from './components/user-chat/box-chat/box-chat.component';

const config: SocketIoConfig = {
  url: 'http://localhost:4444',
  options: { transports: ['websocket'] },
};
@NgModule({
  declarations: [AppComponent, DocumentListComponent, DocumentComponent, UserChatComponent, BoxChatComponent],
  imports: [BrowserModule, FormsModule, SocketIoModule.forRoot(config)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
