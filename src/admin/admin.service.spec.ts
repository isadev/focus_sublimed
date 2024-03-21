import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from './admin.service';
import { RopeModule } from '../rope/rope.module';

describe('AdminService', () => {
    let service: AdminService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AdminService],
            imports: [RopeModule],
        }).compile();

        service = module.get<AdminService>(AdminService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
