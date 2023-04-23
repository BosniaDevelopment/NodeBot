import { IsString } from 'class-validator';

export class WithCode {
    @IsString() code: string;
}
