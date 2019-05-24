import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { transferArrayItem, DragDropRegistry, moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'apc-multi-page-view',
  templateUrl: './multi-page-view.component.html',
  styleUrls: ['./multi-page-view.component.css']
})
export class MultiPageViewComponent implements OnInit {

  pdfPages: any[] = [];
  origin: string;
  destination: string;

  constructor(
    private dialogRef: MatDialogRef<MultiPageViewComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    console.log(data);
    this.pdfPages = data.files;
    this.origin = data.origin;
    this.destination = data.destination;
  }

  ngOnInit() {
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
      if(event.container.data.length === 0) {
        this.dialogRef.close();
      }
    }
  }

  public close() {
    this.dialogRef.close();
  }
}
