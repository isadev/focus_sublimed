import { Test, TestingModule } from '@nestjs/testing';
import { RopeController } from './rope.controller';
import { RopeService } from './rope.service';

describe('RopeController', () => {
    let controller: RopeController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [RopeController],
            providers: [RopeService],
        }).compile();

        controller = module.get<RopeController>(RopeController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
