import { Gym } from '../gyms/gym';
import { FeedInfo } from './feed-info/feed-info';

/**
  id          String      @id @default(uuid())
  name        String
  description String
  type        WorkoutType
  order       Int
  scheduledTo DateTime
  createdAt   DateTime    @default(now())

  gymId String
 */

type WorkoutType = 'WARMUP' | 'METCON' | 'STRENGTH' | 'WORKOUT';

interface Workout {
  id: string;
  name: string;
  description: string;
  type: WorkoutType;
  order: number;
  scheduledTo: Date;
  createdAt: Date;
  gymId: string;
}

export interface GymFeed extends Gym {
  infos: FeedInfo[];
  workouts: Workout[];
}
