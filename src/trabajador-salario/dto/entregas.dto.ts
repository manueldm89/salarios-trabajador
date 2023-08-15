import { IsArray, IsInt, IsNumber, IsPositive, IsString, Length, MaxLength, MinLength, maxLength } from "class-validator";

export class EntregasDto {
    
    @IsNumber()
    @IsPositive()
    empleado: number;

    @IsNumber()
    @IsPositive()
    mes: number;

    @IsNumber()
    @IsPositive()
    entregas: number;
}