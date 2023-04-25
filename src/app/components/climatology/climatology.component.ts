import { Component, OnInit } from '@angular/core';
import { ClimatologyService } from 'app/shared/fetch-api/services/climatology.service';
import { ClimatologyModel } from 'app/shared/fetch-api/model/climatology.model';

@Component({
  selector: 'app-climatology',
  templateUrl: './climatology.component.html',
  styleUrls: ['./climatology.component.scss']
})
export class ClimatologyComponent implements OnInit {
  activeTab = 'telemetri';
  dataTM: ClimatologyModel[] = [];
  dataMN: ClimatologyModel[] = [];
  constructor(
    private climatologyService: ClimatologyService
  ) {}

  ngOnInit(): void {
    this.getListTM();
  }

  changeTab(activeTab){
    this.activeTab = activeTab;
    if (this.activeTab === 'telemetri') {
      this.getListTM();
    } else {
      this.getListMN();
    }
  }

  getListTM(){
    this.climatologyService.getListClimatologyTM()
      .subscribe({
        next: (res) => {
          this.dataTM = res;
        }
      })
  }

  getListMN() {
    this.climatologyService.getListClimatologyMN()
      .subscribe({
        next: (res) => {
          this.dataMN = res;
        }
      })
  }
}
