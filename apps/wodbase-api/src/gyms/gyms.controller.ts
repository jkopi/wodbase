import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GymsService } from './gyms.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { GymEntity } from './entities/gym.entity';

@Controller('gyms')
export class GymsController {
  constructor(private readonly gymsService: GymsService) {}

  @Post()
  @ApiCreatedResponse({ type: GymEntity })
  async create(@Body() createGymDto: CreateGymDto) {
    return await this.gymsService.create(createGymDto);
  }

  @Get()
  async findAll() {
    return await this.gymsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.gymsService.findOne(id);
  }

  @Get(':id/feed')
  async findGymFeed(@Param('id') id: string) {
    return await this.gymsService.findGymFeedData(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGymDto: UpdateGymDto) {
    return await this.gymsService.update(id, updateGymDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.gymsService.remove(id);
  }
}
