import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { gymFeedResolver } from './gym-feed-resolver';
import { GymFeed } from '../gym-feed';

describe('gymFeedResolver', () => {
  const executeResolver: ResolveFn<GymFeed> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => gymFeedResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
