import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type MetaOwnerContactDatumDocument = MetaOwnerContactDatum & Document;

@Schema()
export class MetaOwnerContactDatum {

    @Prop({ type: Number })
    _id: number;

    @Prop({ type: Number })
    metaDataId: number;

    @Prop({ type: Number })
    userRefId: number;

    @Prop({ type: String })
    addressLine: string;

    @Prop({ type: String })
    state: string;

    @Prop({ type: String })
    city: string;

    @Prop({ type: String })
    country: string;

    @Prop({ type: String })
    landmark: string;

    @Prop({ type: String })
    lat: string;

    @Prop({ type: String })
    lng: string;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;

    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;

}

export const MetaOwnerContactDatumSchema = SchemaFactory.createForClass(MetaOwnerContactDatum);
