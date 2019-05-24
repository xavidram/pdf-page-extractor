import { Component, OnInit, Input, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import * as PDFJS from 'pdfjs-dist/build/pdf';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'apc-pdf-pages',
  templateUrl: './pdf-pages.component.html',
  styleUrls: ['./pdf-pages.component.css']
})
export class PdfPagesComponent implements OnInit {
  @ViewChild('pages', { read: ViewContainerRef }) pages: ViewContainerRef;

  @Input() pdfFile: File;
  @Input() connectedTo: string[];
  @Input() width: number;

  loading: boolean;
  parsing: boolean;
  progress: number;
  pdfPages: any[];

  constructor() {
    this.progress = 0;
    this.loading = false;
    this.parsing = true;
  }

  async ngOnInit() {
    await this.parsePages()
  }

  private getDocument() {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadstart = () => {
        this.loading = true;
      };

      reader.onprogress = (event: any) => {
        console.log(event);
        if (event.lengthComputable) {
          this.progress = ((event.loaded / event.total) * 100);
        }
      };

      reader.onload = (event: any) => {
        const data = event.target.result;
        resolve(data);
      };

      reader.onloadend = () => {
        this.loading = false;
      };

      reader.onerror = reject;
      return reader.readAsArrayBuffer(this.pdfFile);
    });
  }

  private async parsePages() {
    this.pages.clear();
    try {
      const buffer = await this.getDocument();
      const pdf = await PDFJS.getDocument({ data: buffer });
      this.pdfPages = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        this.pdfPages.push(await pdf.getPage(i));
      }
      this.parsing = false;
    } catch (err) {
      console.log(err);
    }
  }

  public drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer.id === event.container.id) {
      moveItemInArray(event.container.data, event.previousIndex, event.previousIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
