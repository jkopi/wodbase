import { Module } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { GymsController } from './gyms.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [GymsController],
  providers: [GymsService],
  imports: [PrismaModule],
})
export class GymsModule {}
