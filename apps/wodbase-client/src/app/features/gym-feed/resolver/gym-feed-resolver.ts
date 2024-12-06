import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { GymsService } from '../../gyms/gyms.service';
import { GymFeed } from '../gym-feed';
import { EMPTY } from 'rxjs';

export const gymFeedResolver: ResolveFn<GymFeed> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const gymService = inject(GymsService);
  const gymId = route.paramMap.get('id');
  if (!gymId) {
    return EMPTY;
  }

  return gymService.getGymFeedData(gymId);
};
