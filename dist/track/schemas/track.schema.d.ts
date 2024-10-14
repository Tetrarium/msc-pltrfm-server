import * as mongoose from 'mongoose';
import { Comment } from './comment.schema';
export type TrackDocument = Track & Document;
export declare class Track {
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: Comment[];
}
export declare const TrackSchema: mongoose.Schema<Track, mongoose.Model<Track, any, any, any, mongoose.Document<unknown, any, Track> & Track & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Track, mongoose.Document<unknown, {}, mongoose.FlatRecord<Track>> & mongoose.FlatRecord<Track> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
