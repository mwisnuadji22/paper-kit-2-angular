import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CilacapModel } from 'app/shared/fetch-api/model/cilacap.model';

@Injectable({
  providedIn: 'root'
})
export class TelajasariService {
  baseUrl = '/api/';
  constructor(private http: HttpClient) {}

  getTelajasariData(): Observable<CilacapModel[]> {
    return this.http.get<CilacapModel[]>(`${this.baseUrl}telajasari`)
  }

  getTelajasariById(id: string): Observable<CilacapModel> {
    return this.http.get<CilacapModel>(`${this.baseUrl}telajasari/${id}`)
  }

  addTelajasari(payload: CilacapModel): Observable<Object> {
    return this.http.post(`${this.baseUrl}telajasari`, payload);
  }

  updateTelajasari(payload: CilacapModel): Observable<Object> {
    return this.http.put(`${this.baseUrl}telajasari/${payload.id}`, payload);
  }

  deleteTelajasari(id: string): Observable<Object> {
    return this.http.delete(`${this.baseUrl}telajasari/${id}`);
  }
}
