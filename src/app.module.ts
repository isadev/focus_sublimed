import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { HeaderMiddleware } from './middleware/header.middleware';
import { AdminController } from './admin/admin.controller';
import { RopeController } from './rope/rope.controller';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [AdminModule],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(HeaderMiddleware).exclude('healthcheck').forRoutes(AdminController, RopeController);
    }
}
