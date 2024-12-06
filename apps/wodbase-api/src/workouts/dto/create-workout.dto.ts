import { ApiProperty } from '@nestjs/swagger';
import { Gym, WorkoutType } from '@prisma/client';

export class CreateWorkoutDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  type: WorkoutType;

  @ApiProperty()
  order: number;

  @ApiProperty()
  scheduledTo: Date;

  @ApiProperty()
  gymId: string;
}
