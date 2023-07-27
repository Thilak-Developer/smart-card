import { PartialType } from '@nestjs/mapped-types';
import { CreateUserProfileDto } from './create-user-profile.dto';

export class UpdateUserProfileDto extends PartialType(CreateUserProfileDto) {

    userFirstName: string;

    userLastName: string;

    userDateOfBirth: string;

    userEmail: string;

    userPhone: string;

    userPassword: string;

    createdOn: Date;

    createdBy: string;
    
}
