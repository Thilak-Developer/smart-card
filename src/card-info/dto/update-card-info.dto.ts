import { PartialType } from '@nestjs/mapped-types';
import { CreateCardInfoDto } from './create-card-info.dto';

export class UpdateCardInfoDto extends PartialType(CreateCardInfoDto) {

    cardName: string;

    cardType: string;

    cardAgentRefId: string;

    cardOwnerRefId: string;

    cardMetaDataId: string;

    createdAt: Date;

    updatedAt: Date;

}
