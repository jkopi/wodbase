import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GymInfosService } from './gym-infos.service';
import { CreateGymInfoDto } from './dto/create-gym-info.dto';
import { UpdateGymInfoDto } from './dto/update-gym-info.dto';

@Controller('gym-infos')
export class GymInfosController {
  constructor(private readonly gymInfosService: GymInfosService) {}

  @Post()
  create(@Body() createGymInfoDto: CreateGymInfoDto) {
    return this.gymInfosService.create(createGymInfoDto);
  }

  @Get()
  findAll(@Param('id') id: string) {
    return this.gymInfosService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gymInfosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGymInfoDto: UpdateGymInfoDto) {
    return this.gymInfosService.update(id, updateGymInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gymInfosService.remove(id);
  }
}
