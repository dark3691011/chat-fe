import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents?: Observable<string[]>;
  currentDoc?: string;
  private _docSub?: Subscription;

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    // this.documents = this.documentService.documents;
    // this._docSub = this.documentService.currentDocument.subscribe(
    //   (doc: any) => {
    //     this.currentDoc = doc.id;
    //   }
    // );
  }

  ngOnDestroy() {
    this._docSub?.unsubscribe();
  }

  // loadDoc(id: string) {
  //   this.documentService.getDocument(id);
  // }

  // newDoc() {
  //   this.documentService.newDocument();
  // }
}
