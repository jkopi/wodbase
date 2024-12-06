import { Injectable } from '@nestjs/common';
import { CreateGymInfoDto } from './dto/create-gym-info.dto';
import { UpdateGymInfoDto } from './dto/update-gym-info.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GymInfosService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createGymInfoDto: CreateGymInfoDto) {
    return 'This action adds a new gymInfo';
  }

  findAll(id: string) {
    return `This action returns all gymInfos`;
  }

  findOne(id: string) {
    return `This action returns a #${id} gymInfo`;
  }

  update(id: string, updateGymInfoDto: UpdateGymInfoDto) {
    return `This action updates a #${id} gymInfo`;
  }

  remove(id: string) {
    return `This action removes a #${id} gymInfo`;
  }
}
