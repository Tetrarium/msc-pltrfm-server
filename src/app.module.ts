import * as path from "path";
import * as process from "process";

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";

import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(process.env.DB_HOST),
    TrackModule,
    FileModule,
  ],
})
export class AppModule { }
