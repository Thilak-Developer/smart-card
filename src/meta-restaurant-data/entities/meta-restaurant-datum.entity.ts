import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type MetaRestaurantDatumDocument = MetaRestaurantDatum & Document;

@Schema()
export class MetaRestaurantDatum {

    @Prop({ type: String })
    metaDataId: string;

    @Prop({ type: String })
    menuName: string;

    @Prop({ type: String })
    amount: string;

    @Prop({ type: String })
    instagram: string;

}

export const MetaRestaurantDatumSchema = SchemaFactory.createForClass(MetaRestaurantDatum);
