import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-climatology-dialog',
  templateUrl: './climatology-dialog.component.html',
  styleUrls: ['./climatology-dialog.component.scss']
})
export class ClimatologyDialogComponent implements OnInit {
  @Input() data
  type: string;
  constructor() {}
  ngOnInit() {
  }
}
