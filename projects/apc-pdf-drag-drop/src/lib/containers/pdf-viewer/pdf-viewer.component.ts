import { Component, OnInit, Input, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'apc-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  @ViewChild('PdfContainer') pdfContainer: ElementRef;

  @Input() FileGroups: any[] = [];
  dropList: string[] = [];

  public width: number;
  public fileSelected: boolean;
  public pdfFile: File;

  constructor() {
    this.fileSelected = false;
    this.pdfFile = null;
  }

  ngOnInit() {
    this.width = this.pdfContainer.nativeElement.offsetWidth;
    this.FileGroups.forEach(x => {
      this.dropList.push(x.abbr);
    });
  }

  public onFileSelected(e: File) {
    this.pdfFile = e;
    this.fileSelected = true;
  }

  private bytesToSize(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  closeFile() {
    this.pdfFile = null;
    this.fileSelected = false;
  }
}
