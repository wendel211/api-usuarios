import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Usuários')
    .setDescription('Documentação da API de usuários e perfis')
    .setVersion('1.0')
    .addTag('users')
    .addTag('profiles')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = 3000;
  await app.listen(port);

  console.log(`🚀 Servidor rodando em: http://localhost:${port}`);
  console.log(`📘 Swagger disponível em: http://localhost:${port}/api`);
}
bootstrap();
