import { Gym } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class GymEntity implements Gym {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  owner: string;

  @ApiProperty()
  createdAt: Date;
}
