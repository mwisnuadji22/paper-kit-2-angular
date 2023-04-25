import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClimatologyResponse } from 'app/shared/fetch-api/model/climatology-home.model';
import { ClimatologyModel } from 'app/shared/fetch-api/model/climatology.model';

@Injectable({
  providedIn: 'root'
})
export class ClimatologyService {
  baseUrl = '/api/';

  constructor(
    private http: HttpClient
  ) {}

  getListClimatologyHome(): Observable<ClimatologyResponse[]> {
    return this.http.get<ClimatologyResponse[]>(`${this.baseUrl}climatology`);
  }

  getListClimatologyTM(): Observable<ClimatologyModel[]> {
    return this.http.get<ClimatologyModel[]>(`${this.baseUrl}climatology_tm`);
  }

  getListClimatologyMN(): Observable<ClimatologyModel[]> {
    return this.http.get<ClimatologyModel[]>(`${this.baseUrl}climatology_mn`);
  }
}
