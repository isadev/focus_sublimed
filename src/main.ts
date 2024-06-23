import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { AllExceptionsFilter } from './middleware/all-exceptions-filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = 3000;
    const { httpAdapter } = app.get(HttpAdapterHost);

    app.enableCors({
        origin: 'http://localhost:3001',
        credentials: true,
    });

    app.use(helmet());
    app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

    // FIXME: inner objects in documentation like body request are not shown
    const config = new DocumentBuilder()
        .setTitle('Focus API')
        .setDescription('API internal purpose only')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}
bootstrap();
