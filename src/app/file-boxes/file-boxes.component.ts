import { MatDialog, MatDialogConfig } from '@angular/material';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MultiPageViewComponent } from 'apc-pdf-drag-drop';

export interface FileGroup {
  title?: string;
  files?: any[];
  count?: number;
  abbr?: string;
}

@Component({
  selector: 'apc-file-boxes',
  templateUrl: './file-boxes.component.html',
  styleUrls: ['./file-boxes.component.scss']
})
export class FileBoxesComponent implements OnInit {

  @Input() DropListNames: string[];
  @Input() FileGroups: FileGroup[];

  public width = 150; // 150 px

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  public drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
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

  viewAllFiles(idx: number) {
    const dConfig = new MatDialogConfig();
    dConfig.autoFocus = true;
    dConfig.disableClose = false;
    dConfig.hasBackdrop = false;
    dConfig.panelClass = 'transfer-modal';

    dConfig.data = {
      files: this.FileGroups[idx].files,
      destination: 'pages',
      origin: this.FileGroups[idx].abbr
    };

    let result = this.dialog.open(MultiPageViewComponent, dConfig);
    result.afterClosed().subscribe((result: any) => {
      console.log(result);
    });
  }
}
