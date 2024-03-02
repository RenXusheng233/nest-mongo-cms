import { Module } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { WinstonModule } from 'nest-winston';
import { LOGGER_OPTIONS } from './common/logger';
import { DB_NAME, DB_URL } from './common/db';
import { CatModule } from './modules/cat/cat.module';
import { DogModule } from './modules/dog/dog.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ValidationPipe } from './pipes/validation.pipe';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [
    WinstonModule.forRoot(LOGGER_OPTIONS),
    MongooseModule.forRoot(`${DB_URL}/${DB_NAME}`),
    CatModule,
    DogModule,
    AuthModule,
    UserModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
})
export class AppModule {}
