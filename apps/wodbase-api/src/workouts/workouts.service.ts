import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkoutsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createWorkoutDto: CreateWorkoutDto) {
    return await this.prismaService.workout.create({ data: createWorkoutDto });
  }

  async findAll() {
    return `This action returns all workouts`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} workout`;
  }

  async update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    return `This action updates a #${id} workout`;
  }

  async remove(id: number) {
    return `This action removes a #${id} workout`;
  }
}
