import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule, WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { NestExpressApplication } from '@nestjs/platform-express';
import { LOGGER_OPTIONS } from './common/logger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: WinstonModule.createLogger({
      ...LOGGER_OPTIONS,
    }),
  });
  const logger = app.get(WINSTON_MODULE_PROVIDER);
  await app.listen(8888, () => {
    logger.info('Ready on http://localhost:8888');
  });
}
bootstrap();
