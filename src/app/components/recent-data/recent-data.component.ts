import { Component, OnInit } from '@angular/core';
import { RainfallService } from 'app/shared/fetch-api/services/rainfall.service';
import { PosHome, RainfallModel, ResponsePosHome } from 'app/shared/fetch-api/model/rainfall.model';
import { ClimatologyResponse } from 'app/shared/fetch-api/model/climatology-home.model';
import { ClimatologyService } from 'app/shared/fetch-api/services/climatology.service';
import { UserService } from 'app/shared/fetch-api/services/user.service';

@Component({
  selector: 'app-recent-data',
  templateUrl: './recent-data.component.html',
  styleUrls: ['./recent-data.component.scss']
})
export class RecentDataComponent implements OnInit {
  rainfalls: ResponsePosHome[] = [];
  rainfallByArea1: ResponsePosHome[] = [];
  rainfallByArea2: ResponsePosHome[] = [];
  rainfallByArea3: ResponsePosHome[] = [];
  tmaResponse: ClimatologyResponse[] = [];
  tmaByArea1: ClimatologyResponse[] = [];
  tmaByArea2: ClimatologyResponse[] = [];
  tmaByArea3: ClimatologyResponse[] = [];
  isLoggedIn;

  constructor(
    private rainfallService: RainfallService,
    private tmaService: ClimatologyService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.getRainFall();
    this.getTMA();
    this.userService.getStateLogin().subscribe((res) => {
      this.isLoggedIn = res;
    });
    this.isLoggedIn = localStorage.getItem('user_login');
  }

  getRainFall(): void {
    this.rainfallService.getRainFallHome()
      .subscribe({
        next: (res) => {
          this.rainfalls = res;
          this.rainfallByArea1 = this.rainfalls.filter((rainfall) => rainfall.pos.wilayah === '1');
          this.rainfallByArea2 = this.rainfalls.filter((rainfall) => rainfall.pos.wilayah === '2');
          this.rainfallByArea3 = this.rainfalls.filter((rainfall) => rainfall.pos.wilayah === '3');
        }
      })
  }

  getTMA(): void {
    this.tmaService.getListClimatologyHome()
      .subscribe({
        next: (res: ClimatologyResponse[]) => {
          this.tmaResponse = res;
          this.tmaByArea1 = this.tmaResponse.filter((tma) => tma.pos.wilayah === '1');
          this.tmaByArea2 = this.tmaResponse.filter((tma) => tma.pos.wilayah === '2');
          this.tmaByArea3 = this.tmaResponse.filter((tma) => tma.pos.wilayah === '3');
        }
      })
  }
}
