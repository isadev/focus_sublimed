import { Module } from '@nestjs/common';
import { RopeService } from './rope.service';
import { RopeController } from './rope.controller';

@Module({
    controllers: [RopeController],
    providers: [RopeService],
    exports: [RopeService],
})
export class RopeModule {}
