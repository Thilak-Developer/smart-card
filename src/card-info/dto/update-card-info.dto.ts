import { PartialType } from '@nestjs/mapped-types';
import { CreateCardInfoDto } from './create-card-info.dto';

export class UpdateCardInfoDto extends PartialType(CreateCardInfoDto) {

    cardId: number;

    cardName: string;

    cardType: string;

    cardAgentRefId: number;

    cardOwnerRefId: number;

    cardMetaDataId: string;

    createdAt: Date;

    updatedAt: Date;

}
