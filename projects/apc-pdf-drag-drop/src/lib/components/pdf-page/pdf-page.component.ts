import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  ViewContainerRef,
  AfterViewInit,
  HostListener
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SinglePageViewComponent } from '../single-page-view/single-page-view.component';

@Component({
  selector: 'apc-pdf-page',
  templateUrl: './pdf-page.component.html',
  styleUrls: ['./pdf-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdfPageComponent implements AfterViewInit {
  @ViewChild('canvasContainer') canvasContainer: ElementRef;
  @ViewChild('pdfCanvas') canvas: ElementRef;

  @Input() page: any;
  @Input() singlePage = true;
  @Input() width: number;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private dialog: MatDialog) {
  }

  async ngAfterViewInit() {
    let viewport = this.page.getViewport(1);
    const scale = (this.width) / viewport.width;
    viewport = this.page.getViewport(scale);
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    const canvasContext = canvasEl.getContext('2d');
    canvasEl.height = viewport.height;
    canvasEl.width = viewport.width;
    const task = this.page.render({ canvasContext, viewport });

    await task.promise;
  }

  @HostListener('dblclick') onDblClick() {
    if (this.singlePage) {
      const dConfig = new MatDialogConfig();

      dConfig.autoFocus = true;
      dConfig.closeOnNavigation = true;
      dConfig.disableClose = false;
      dConfig.hasBackdrop = true;
      dConfig.data = this.page;

      this.dialog.open(SinglePageViewComponent, dConfig);
    }
  }

}
