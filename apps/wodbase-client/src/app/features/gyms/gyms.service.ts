import { Injectable } from '@angular/core';
import { Gym } from './gym';
import { GymFeed } from '../gym-feed/gym-feed';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GymsService {
  readonly baseUrl = 'http://localhost:3000/gyms';

  constructor(private http: HttpClient) {}

  getGyms(): Observable<Gym[]> {
    return this.http.get<Gym[]>(this.baseUrl);
  }

  getGymFeedData(gymId: string): Observable<GymFeed> {
    return this.http.get<GymFeed>(`${this.baseUrl}/${gymId}/feed`);
  }
}
