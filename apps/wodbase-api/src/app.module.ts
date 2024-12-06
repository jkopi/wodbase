import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GymsModule } from './gyms/gyms.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { GymInfosModule } from './gym-infos/gym-infos.module';

@Module({
  imports: [PrismaModule, GymsModule, WorkoutsModule, GymInfosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
