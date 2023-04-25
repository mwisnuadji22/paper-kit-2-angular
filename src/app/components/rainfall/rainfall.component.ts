import { Component, OnInit } from '@angular/core';
import { RainfallService } from 'app/shared/fetch-api/services/rainfall.service';
import { RainfallModel } from 'app/shared/fetch-api/model/rainfall.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RainfallDialogComponent } from 'app/shared/dialog/rainfall-dialog/rainfall-dialog.component';
import { UserService } from 'app/shared/fetch-api/services/user.service';
import { Router } from '@angular/router';
import { DialogBasicComponent } from 'app/shared/dialog/basic/dialog-basic.component';
import { DialogBasic } from 'app/shared/dialog/basic/dialog-basic.interface';

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
  isLoggedIn;
  modalRefRemove: NgbModalRef;
  modalRefUpdate: NgbModalRef;
  constructor(
    private router: Router,
    private userService: UserService,
    private rainfallService: RainfallService,
    private modalService: NgbModal) {}
  ngOnInit() {
    this.getRainfall();
    this.userService.getStateLogin()
      .subscribe((res) => {
        this.isLoggedIn = res;
      })
    this.isLoggedIn = localStorage.getItem('user_login');
  }

  open() {
    this.modalService.open(RainfallDialogComponent, {
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

  remove(id: string) {
    this.modalRefRemove = this.modalService.open(DialogBasicComponent);
    this.modalRefRemove.componentInstance.data = {
      title: 'Remove Data',
      content: 'Are you sure you want to delete this data?',
      buttons: [
        {
          action: true,
          name: 'Yes',
          class: 'btn btn-success btn-link'
        },
        {
          action: false,
          name: 'Back',
          class: 'btn btn-default btn-link'
        }
      ]
    } as DialogBasic;
    history.pushState(null, null, 'modalOpened');
    this.modalRefRemove.result.then((result) => {
      if (result) {
        this.rainfallService.deleteRainFall(id)
          .subscribe({
            next: () => {
              this.router.navigateByUrl('/', {skipLocationChange: true})
                .then(() => this.router.navigate(['rainfall']))
            }
          })
      }
    })
  }

  getRainfallById(id: string) {
    this.rainfallService.getRainFallById(id)
      .subscribe({
        next: (res) => {
          this.modalRefUpdate = this.modalService.open(RainfallDialogComponent);
          this.modalRefUpdate.componentInstance.rainfallData = res;
        }
      })
  }
}
