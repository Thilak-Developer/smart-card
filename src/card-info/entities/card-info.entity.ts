import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { number } from "joi";
import mongoose, { Types } from "mongoose";
import { MetaDatum } from "src/meta-data/entities/meta-datum.entity";
import { UserProfile } from "src/user-profile/entities/user-profile.entity";

export type CardInfoDocument = CardInfo & Document;

@Schema()
export class CardInfo {

    @Prop({ type: Number })
    _id: number;

    @Prop({ type: String })
    cardName: string;

    @Prop({ type: String })
    cardType: string;

    @Prop({ type: String })
    cardAgentRefId: number;

    @Prop({ type: Number, ref: UserProfile.name })
    cardOwnerRefId: number;

    @Prop({ type: Number, ref: MetaDatum.name })
    cardMetaDataId: number;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;

    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;

}

export const CardInfoSchema = SchemaFactory.createForClass(CardInfo);


