import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GymsModule } from './gyms/gyms.module';

@Module({
  imports: [PrismaModule, GymsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
