import { PartialType } from '@nestjs/mapped-types';
import { CreateMetaDatumDto } from './create-meta-datum.dto';

export class UpdateMetaDatumDto extends PartialType(CreateMetaDatumDto) {

    metaName: string;

    metaType: string;

    metaDocNumber: number;

    metaDescription: number;

    metaDataRefId: number;

    metaLocation: string;

}
