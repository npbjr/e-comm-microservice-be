import { IsNotEmpty } from "class-validator";

export class tokenDTO {
    @IsNotEmpty()
    access_token:string;

    @IsNotEmpty()
    expires_at:string;
}