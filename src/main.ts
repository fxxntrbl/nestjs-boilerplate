import { Logger } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet({ contentSecurityPolicy: false }));

  if (process.env.NODE_ENV == 'dev') {
    Logger.debug('Running as DEV mode');
  }

  const port = parseInt(process.env.PORT) || 8080;
  await app.listen(port);
}
bootstrap();
