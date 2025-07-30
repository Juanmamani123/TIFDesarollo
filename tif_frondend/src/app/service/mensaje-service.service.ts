import { Injectable } from '@angular/core';
import { Mensaje } from '../model/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensajeServiceService {
  private readonly url_api = 'http://127.0.0.1:8000/api';
  constructor(
    private http: HttpClient
  ) { }

  obtenerMensajeId(id: number): Observable<Mensaje> {
    return this.http.get<Mensaje>(`${this.url_api}/mensajes/${id}`);
  }
  obtenerMensaje(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(`${this.url_api}/mensajes`);
  }
}
