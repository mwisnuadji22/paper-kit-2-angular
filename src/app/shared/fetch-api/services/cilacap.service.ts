import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CilacapModel } from 'app/shared/fetch-api/model/cilacap.model';

@Injectable({
  providedIn: 'root'
})
export class CilacapService {
  baseUrl = '/api/';
  constructor(private http: HttpClient) {}
  
  getCilacapData(): Observable<CilacapModel[]> {
    return this.http.get<CilacapModel[]>(`${this.baseUrl}cilacap`)
  }

  getCilacapById(id: string): Observable<CilacapModel> {
    return this.http.get<CilacapModel>(`${this.baseUrl}cilacap/${id}`)
  }

  addCilacap(payload: CilacapModel): Observable<Object> {
    console.log('asd')
    return this.http.post(`${this.baseUrl}cilacap`, payload);
  }

  updateCilacap(payload: CilacapModel): Observable<Object> {
    console.log('service update')
    return this.http.put(`${this.baseUrl}cilacap/${payload.id}`, payload);
  }

  deleteCilacap(id: string): Observable<Object> {
    return this.http.delete(`${this.baseUrl}cilacap/${id}`);
  }
}
