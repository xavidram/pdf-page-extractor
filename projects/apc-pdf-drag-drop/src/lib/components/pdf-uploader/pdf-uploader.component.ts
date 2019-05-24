import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'apc-pdf-uploader',
  templateUrl: './pdf-uploader.component.html',
  styleUrls: ['./pdf-uploader.component.css']
})
export class PdfUploaderComponent implements OnInit {

  public uForm: FormGroup;
  public fileUploaded: boolean;

  @Output() selectedFile: EventEmitter<File> = new EventEmitter<File>();

  constructor(private fb: FormBuilder) {
    this.fileUploaded = false;
    this.uForm = this.fb.group({
      uploadFile: [null, []]
    });
  }

  ngOnInit() {
  }

  fileSelected(e: any) {
    this.selectedFile.emit(e.target.files[0]);
    this.fileUploaded = true;
  }

}
