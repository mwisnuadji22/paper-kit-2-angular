import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { PosHome, RainfallModel, ResponsePosHome } from '../model/rainfall.model';

@Injectable({
  providedIn: 'root'
})
export class RainfallService {
  baseUrl = '/api/';
  constructor(private http: HttpClient) {}

  getRainFallHome(): Observable<ResponsePosHome[]> {
    return this.http.get<ResponsePosHome[]>(`${this.baseUrl}rainfall_home`);
  }

  getRainFall(): Observable<RainfallModel[]> {
    return this.http.get<RainfallModel[]>(`${this.baseUrl}rainfall`)
  }

  getRainFallById(id: string): Observable<RainfallModel> {
    return this.http.get<RainfallModel>(`${this.baseUrl}rainfall/${id}`)
  }
  
  addRainFall(payload: RainfallModel): Observable<Object> {
    return this.http.post(`${this.baseUrl}rainfall`, payload);
  }

  updateRainFall(payload: RainfallModel): Observable<Object> {
    return this.http.put(`${this.baseUrl}rainfall/${payload.id}`, payload);
  }

  deleteRainFall(id: string): Observable<Object> {
    return this.http.delete(`${this.baseUrl}rainfall/${id}`);
  }
}
