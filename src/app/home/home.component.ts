import { Component, OnInit } from '@angular/core';
import { FileGroup } from '../file-boxes/file-boxes.component';

@Component({
  selector: 'apc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  droplist: string[] = ['pages'];

  documents: FileGroup[] = [
    { title: 'Acknoledgment Reciept', count: 0, files: [], abbr: 'acknowledgment' },
    { title: 'Cafeteria Plan Application', count: 0, files: [], abbr: 'cafeteria' },
    { title: 'MBA Waiver', count: 0, files: [], abbr: 'mbawaiver' },
    { title: 'MBA Enrollmlent Form', count: 0, files: [], abbr: 'mbaenrollment' },
    { title: 'Humana Application', count: 0, files: [], abbr: 'humanaapply' },
    { title: 'Humana Change Form', count: 0, files: [], abbr: 'humanachange' },
    { title: 'Gap Application', count: 0, files: [], abbr: 'gap' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
