import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/music'),
    TrackModule,
    FileModule,
  ]
})
export class AppModule { }