import { Component, inject, OnInit } from '@angular/core';
import { GymsService } from '../gyms/gyms.service';
import { GymFeed } from './gym-feed';
import { ActivatedRoute } from '@angular/router';
import { FeedInfoComponent } from './feed-info/feed-info.component';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-gym-feed',
  imports: [FeedInfoComponent, AsyncPipe, MarkdownComponent],
  templateUrl: './gym-feed.component.html',
  styleUrl: './gym-feed.component.scss',
  standalone: true,
})
export class GymFeedComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  fallbackGymInfo: string = 'No gym info given :(';
  gymFeedData$!: Observable<GymFeed>;

  errorMessage: string = '';
  gymId: string = 'a6458a69-db7d-47c5-b21d-be0a5eac098a';

  public ngOnInit() {
    this.gymFeedData$ = this.activatedRoute.data.pipe(
      map((data) => data['gymFeedData']),
    );
  }
}
