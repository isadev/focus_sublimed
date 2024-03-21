import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { RopeModule } from 'src/rope/rope.module';

@Module({
    controllers: [AdminController],
    providers: [AdminService],
    exports: [AdminService],
    imports: [RopeModule], // the import is importe instead of the service
})
export class AdminModule {
    constructor() {}
}
