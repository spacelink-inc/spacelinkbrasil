import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });

  app.enableCors();

  await app.listen(process.env.PORT || 3333);

  console.log(`🚀 Server is running on port ${process.env.PORT || 3333}`);
}
bootstrap();
