import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { HeaderMiddleware } from './middleware/header.middleware';
import { AdminController } from './admin/admin.controller';
import { RopeController } from './rope/rope.controller';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        // Env vars
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
        }),
        // Mongo connection
        MongooseModule.forRoot(process.env.MONGO_CONNECTION, { autoIndex: false, dbName: 'focus_sublimed' }),
        // Crud Models and Controllers
        AdminModule,
        LoginModule,
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(HeaderMiddleware).exclude('healthcheck').forRoutes(AdminController, RopeController);
    }
}
