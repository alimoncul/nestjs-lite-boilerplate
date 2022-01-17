require('dotenv').config();
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PORT, SWAGGER_DESCRIPTION, SWAGGER_TITLE, SWAGGER_VERSION } from './constants/app';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .addBearerAuth(
            {
                description: `Please enter access_token you got from auth/login`,
                name: 'Authorization',
                bearerFormat: 'Bearer',
                scheme: 'Bearer',
                type: 'http',
                in: 'Header'
            },
            'access-token'
        )
        .setTitle(SWAGGER_TITLE)
        .setDescription(SWAGGER_DESCRIPTION)
        .setVersion(SWAGGER_VERSION)
        .build();
    const document = SwaggerModule.createDocument(app, config, {
        include: [AppModule]
    });
    SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true
        })
    );
    Logger.log(`Application up and running in port: ${PORT}`);
    await app.listen(PORT);
}
bootstrap();
