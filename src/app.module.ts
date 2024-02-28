import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LOGGER_OPTIONS } from './common/logger';
import { CatModule } from './modules/cat/cat.module';
import { DogModule } from './modules/dog/dog.module';

@Module({
  imports: [
    WinstonModule.forRoot(LOGGER_OPTIONS),
    MongooseModule.forRoot('mongodb://localhost:27017/ollama'),
    CatModule,
    DogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
