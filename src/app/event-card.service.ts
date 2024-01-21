import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventCard } from './event-card.interface';

@Injectable({
  providedIn: 'root'
})
export class EventCardService {
  private baseUrl = 'https://localhost:7259/api';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventCard[]> {
    return this.http.get<EventCard[]>(`${this.baseUrl}/Events`);
  }
}
