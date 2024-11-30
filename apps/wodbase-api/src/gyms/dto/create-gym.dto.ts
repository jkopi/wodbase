import { ApiProperty } from '@nestjs/swagger';

export class CreateGymDto {
  @ApiProperty()
  name: string;
  
  @ApiProperty()
  description: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  owner: string;
}
