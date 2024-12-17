import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class simpleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: Error | any) => void) {
    console.log('Requesting...');
    next();
  }
}
