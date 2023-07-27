import { PartialType } from '@nestjs/mapped-types';
import { CreateMetaOwnerContactDatumDto } from './create-meta-owner-contact-datum.dto';

export class UpdateMetaOwnerContactDatumDto extends PartialType(CreateMetaOwnerContactDatumDto) {
    
    metaDataId: string;

    userRefId: string;

    addressLine: string;

    state: string;

    city: string;

    country: string;

    landmark: string;

    lat: string;

    lng: string;

    updatedAt: Date;

}
