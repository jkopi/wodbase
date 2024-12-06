import { Routes } from '@angular/router';
import { GymsComponent } from './features/gyms/gyms.component';
import { GymFeedComponent } from './features/gym-feed/gym-feed.component';
import { gymFeedResolver } from './features/gym-feed/resolver/gym-feed-resolver';

export const routes: Routes = [
  { path: 'gyms', component: GymsComponent, title: 'Wodbase' },
  {
    path: 'gyms/:id/feed',
    component: GymFeedComponent,
    title: 'Wodbase',
    resolve: { gymFeedData: gymFeedResolver },
  },
];
