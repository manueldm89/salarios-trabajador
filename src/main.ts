import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );

  app.enableCors({
    origin: '*',
    methods: 'POST',
    credentials: true,
  })
  
  await app.listen(process.env.PORT);
  logger.log(`App runnig on port ${process.env.PORT}`)
}
bootstrap();
