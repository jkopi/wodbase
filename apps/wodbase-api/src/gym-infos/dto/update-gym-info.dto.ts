import { PartialType } from '@nestjs/swagger';
import { CreateGymInfoDto } from './create-gym-info.dto';

export class UpdateGymInfoDto extends PartialType(CreateGymInfoDto) {}
