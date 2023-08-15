import { IsArray, IsInt, IsNumber, IsPositive, IsString, Length, MaxLength, MinLength, maxLength } from "class-validator";

export class CreateTrabajadorDto {
    
    @IsNumber()
    @IsPositive()
    empleado: number;

    @IsString()
    nombre: string;

    @IsNumber()
    @IsPositive()
    puesto: number;
}
