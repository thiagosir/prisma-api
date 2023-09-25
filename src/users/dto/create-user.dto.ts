import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ description: 'Email do Usuario' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'Nome completo do usuario' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'Define se o usuario é admin', default: false })
    @IsBoolean()
    admin: boolean;
}
