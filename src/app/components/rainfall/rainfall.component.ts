import { Component, OnInit } from '@angular/core';
import { RainfallService } from 'app/shared/fetch-api/services/rainfall.service';
import { RainfallModel, ResponsePosHome } from 'app/shared/fetch-api/model/rainfall.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from 'app/shared/dialog/dialog.component';

@Component({
  selector: 'app-rainfall',
  templateUrl: './rainfall.component.html',
  styleUrls: ['./rainfall.component.scss']
})
export class RainfallComponent implements OnInit {
  rainfalls: RainfallModel[] = [];
  rainfallByArea1: RainfallModel[] = [];
  rainfallByArea2: RainfallModel[] = [];
  rainfallByArea3: RainfallModel[] = [];
  constructor(
    private rainfallService: RainfallService,
    private modalService: NgbModal) {}
  ngOnInit() {
    this.getRainfall();
  }

  open() {
    this.modalService.open(DialogComponent, {
      centered: true,
      backdrop: true
    })
  }

  getRainfall(): void {
    this.rainfallService.getRainFall()
      .subscribe({
        next: (res: RainfallModel[]) => {
          this.rainfalls = res;
          this.rainfallByArea1 = this.rainfalls.filter((rainfall) => rainfall.pos.wilayah === '1');
          this.rainfallByArea2 = this.rainfalls.filter((rainfall) => rainfall.pos.wilayah === '2');
          this.rainfallByArea3 = this.rainfalls.filter((rainfall) => rainfall.pos.wilayah === '3');
        }
      })
  }
}
