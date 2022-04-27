import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DocumentService } from 'src/app/services/document.service';
import { startWith } from 'rxjs/operators';
import { Document } from 'src/app/models/document.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
})
export class DocumentComponent implements OnInit, OnDestroy {
  document!: Document;
  private _docSub?: Subscription;
  text?: string;
  name?: string;
  list: Array<Document> = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    // this.name = this.docId();
    // this._docSub = this.documentService.currentDocument.subscribe(
    //   (document) => {
    //     this.document = document;
    //     console.log(this.document);
    //     this.list.push(document);
    //   }
    // );
  }

  ngOnDestroy() {
    this._docSub?.unsubscribe();
  }

  editDoc() {
    // this.documentService.editDocument(this.document);
  }

  send() {
    let data: Document = {
      id: this.document.id,
      doc: this.text,
      name: this.name,
    };
    // this.documentService.send(data);
  }
  private docId() {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
