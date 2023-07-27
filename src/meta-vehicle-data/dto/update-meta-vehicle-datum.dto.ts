import { PartialType } from '@nestjs/mapped-types';
import { CreateMetaVehicleDatumDto } from './create-meta-vehicle-datum.dto';

export class UpdateMetaVehicleDatumDto extends PartialType(CreateMetaVehicleDatumDto) {

    metaDataId: number;

    vechileRegNo: number;

    whatsapp: number;

    instagram: string;

    metaDataItmRefId: number;
    
}
