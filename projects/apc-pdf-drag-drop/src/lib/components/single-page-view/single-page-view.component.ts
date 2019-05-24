import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'apc-single-page-view',
  templateUrl: './single-page-view.component.html',
  styleUrls: ['./single-page-view.component.css']
})
export class SinglePageViewComponent implements AfterViewInit {
  @ViewChild('pdfCanvas') canvas: ElementRef;

  page: any;

  constructor(
    private dialogRef: MatDialogRef<SinglePageViewComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.page = data;
  }

  async ngAfterViewInit() {
    let viewport = this.page.getViewport(1);
    const scale = (600) / viewport.width;
    viewport = this.page.getViewport(scale);
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    const canvasContext = canvasEl.getContext('2d');
    canvasEl.height = viewport.height;
    canvasEl.width = viewport.width;
    const task = this.page.render({ canvasContext, viewport });

    await task.promise;
  }

}
