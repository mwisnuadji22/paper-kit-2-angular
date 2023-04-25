import { Component, Input, OnInit } from '@angular/core';
import { DialogBasic } from 'app/shared/dialog/basic/dialog-basic.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-dialog',
  templateUrl: './dialog-basic.component.html',
  styleUrls: ['./dialog-basic.component.scss']
})
export class DialogBasicComponent implements OnInit {
  @Input() data: DialogBasic;
  constructor(
    private activeModal:NgbActiveModal
  ) {}

  ngOnInit() {
  }

  actionClick(action: string) {
    this.activeModal.close(action);
  }
}
