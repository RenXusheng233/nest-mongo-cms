import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinstonModule } from 'nest-winston';
import { LOGGER_OPTIONS } from './common/logger';

@Module({
  imports: [WinstonModule.forRoot(LOGGER_OPTIONS)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
