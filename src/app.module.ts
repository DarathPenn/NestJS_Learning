import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './module/songs/songs.module';
import { simpleMiddleware } from 'src/middleware/simple.middleware';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(simpleMiddleware).forRoutes({
      path: 'songs',
      method: RequestMethod.POST,
    });
  }
}
