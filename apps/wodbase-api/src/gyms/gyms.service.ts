import { Injectable } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GymsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGymDto: CreateGymDto) {
    return await this.prisma.gym.create({
      data: createGymDto,
    });
  }

  async findAll() {
    return await this.prisma.gym.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.gym.findFirst({ where: { id } });
  }

  async findGymFeedData(id: string) {
    const res = await this.prisma.gym.findFirst({
      where: { id },
      include: { infos: true, workouts: true },
    });

    return res;
  }

  async findOneWithGymInfos(id: string) {
    const res = await this.prisma.gym.findFirst({
      where: { id },
      include: { infos: true },
    });

    return res;
  }

  async update(id: string, updateGymDto: UpdateGymDto) {
    return `This action updates a #${id} gym`;
  }

  async remove(id: string) {
    return `This action removes a #${id} gym`;
  }
}
