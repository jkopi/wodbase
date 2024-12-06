import { Module } from '@nestjs/common';
import { GymInfosService } from './gym-infos.service';
import { GymInfosController } from './gym-infos.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [GymInfosController],
  providers: [GymInfosService],
  imports: [PrismaModule],
})
export class GymInfosModule {}
