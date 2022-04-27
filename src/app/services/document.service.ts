import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Document } from 'src/app/models/document.model';
@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  // currentDocument = this.socket.fromEvent<Document>('document');
  // documents = this.socket.fromEvent<string[]>('documents');
  // users = this.socket.fromEvent<string[]>('users');
  message = this.socket.fromEvent<any>('on-message');

  constructor(private socket: Socket) {}

  // getDocument(id: string) {
  //   this.socket.emit('getDoc', id);
  // }

  // newDocument() {
  //   this.socket.emit('addDoc', { id: this.docId(), doc: '' });
  // }

  // editDocument(document: Document) {
  //   this.socket.emit('editDoc', document);
  // }
  // send(document: Document) {
  //   this.socket.emit('send', document);
  // }
  setName(name: any) {
    this.socket.emit('set-name', name);
  }
  joinBox(nameBox: any) {
    this.socket.emit('join', nameBox);
  }
  sendMessage(message: any) {
    this.socket.emit('send', message);
  }
  // close() {
  //   this.socket.emit('close', {});
  // }

  // private docId() {
  //   let text = '';
  //   const possible =
  //     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  //   for (let i = 0; i < 5; i++) {
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   }

  //   return text;
  // }
}
