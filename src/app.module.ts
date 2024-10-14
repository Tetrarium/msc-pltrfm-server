import * as path from 'path';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/music'),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
