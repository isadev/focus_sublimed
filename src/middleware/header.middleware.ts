import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { IsJWT } from 'class-validator';

@Injectable()
export class HeaderMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Executing request...');
        console.log(req.headers.cookie);
        next();
    }
}
