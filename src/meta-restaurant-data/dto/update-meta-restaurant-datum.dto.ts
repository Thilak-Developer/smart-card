import { PartialType } from '@nestjs/mapped-types';
import { CreateMetaRestaurantDatumDto } from './create-meta-restaurant-datum.dto';

export class UpdateMetaRestaurantDatumDto extends PartialType(CreateMetaRestaurantDatumDto) {

    metaDataId: number;

    menuName: string;

    amount: string;

    instagram: string;

}
