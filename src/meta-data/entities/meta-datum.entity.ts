import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type MetaDatumDocument = MetaDatum & Document;

@Schema()
export class MetaDatum {

    @Prop({ type: Number })
    metaId: number;

    @Prop({ type: String })
    metaName: string;

    @Prop({ type: String })
    metaType: string;

    @Prop({ type: Number })
    metaDocNumber: number;

    @Prop({ type: Number })
    metaDescription: number;

    @Prop({ type: Number })
    metaDataRefId: number;

    @Prop({ type: String })
    metaLocation: string;

}

export const MetaDatumSchema = SchemaFactory.createForClass(MetaDatum);
