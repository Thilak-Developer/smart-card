import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type MetaVehicleDatumDocument = MetaVehicleDatum & Document;

@Schema()
export class MetaVehicleDatum {

    @Prop({ type: Number })
    _id: number;

    @Prop({ type: Number })
    metaDataId: number;

    @Prop({ type: Number })
    vechileRegNo: number;

    @Prop({ type: Number })
    whatsapp: number;

    @Prop({ type: String })
    instagram: string;

    @Prop({ type: Number })
    metaDataItmRefId: number;

}

export const MetaVehicleDatumSchema = SchemaFactory.createForClass(MetaVehicleDatum);
