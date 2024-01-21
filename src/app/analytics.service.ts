import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventCard } from './event-card.interface';
import {Analytics} from "./analytics.interface";

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private baseUrl = 'https://localhost:7259/api';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Analytics> {
    return this.http.get<Analytics>(`${this.baseUrl}/Events/analytics?email=string&Start=2023-01-21T12%3A58%3A13.502&End=2025-01-21T12%3A58%3A13.502`);
  }
}
