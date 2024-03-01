import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User {
  @Prop({ unique: true })
  username: string;

  @Prop()
  password: string;
}

export type UserDocuemnt = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);
