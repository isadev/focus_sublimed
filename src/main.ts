import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { AllExceptionsFilter } from './middleware/all-exceptions-filter';

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
    await app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}
bootstrap();
