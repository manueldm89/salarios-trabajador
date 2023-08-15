import { IsArray, IsInt, IsNumber, IsPositive, IsString, Length, MaxLength, MinLength, maxLength } from "class-validator";

export class InfoEmpleadoDto {
    
    @IsNumber()
    @IsPositive()
    empleado: number;
}