import { FileService } from 'src/file/file.service';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Comment, CommentSchema } from './schemas/comment.schema';
import { Track, TrackSchema } from './schemas/track.schema';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  controllers: [TrackController],
  providers: [TrackService, FileService],
})
export class TrackModule {}
