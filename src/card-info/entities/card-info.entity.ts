import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CardInfoDocument = CardInfo & Document;

@Schema()
export class CardInfo {

    @Prop({ type: Number })
    cardId: number;

    @Prop({ type: String })
    cardName: string;

    @Prop({ type: String })
    cardType: string;

    @Prop({ type: String })
    cardAgentRefId: number;

    @Prop({ type: String })
    cardOwnerRefId: number;

    @Prop({ type: String })
    cardMetaDataId: string;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;

    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;

}

export const CardInfoSchema = SchemaFactory.createForClass(CardInfo);
