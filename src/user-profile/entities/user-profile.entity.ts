import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type UserProfileDocument = UserProfile & Document;

@Schema()
export class UserProfile {

    @Prop({ type: Number })
    _id: number;

    @Prop({ type: String })
    userFirstName: string;

    @Prop({ type: String })
    userLastName: string;

    @Prop({ type: String })
    userDateOfBirth: string;

    @Prop({ type: String })
    userEmail: string;

    @Prop({ type: String })
    userPhone: string;

    @Prop({ type: String })
    userPassword: string;

    @Prop({ type: Date, default: Date.now })
    createdOn: Date;

    @Prop({ type: String, default: "SYSTEM" })
    createdBy: string;

}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfile);
