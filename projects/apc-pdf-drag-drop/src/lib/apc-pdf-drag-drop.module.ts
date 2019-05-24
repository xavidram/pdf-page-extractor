import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PdfPageComponent,
  PdfUploaderComponent,
  PdfUploadProgressComponent,
  PdfPagesComponent,
  SinglePageViewComponent,
  MultiPageViewComponent
} from './components';
import { PdfViewerComponent } from './containers';
// Material Imports
import { MatCardModule, MatIconModule, MatButtonModule, MatProgressBarModule, MatDialogModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const CONTAINERS = [
  PdfViewerComponent
];

const COMPONENTS = [
  PdfPageComponent,
  PdfUploaderComponent,
  PdfUploadProgressComponent,
  PdfPagesComponent,
  SinglePageViewComponent,
  MultiPageViewComponent
];

@NgModule({
  entryComponents: [SinglePageViewComponent, MultiPageViewComponent],
  declarations: [...COMPONENTS, ...CONTAINERS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  exports: [...CONTAINERS, ...COMPONENTS]
})
export class APCPDFDragDropModule { }
