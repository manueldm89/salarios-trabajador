import { IsNumber, IsPositive } from "class-validator";

export class SueldoEmpleadoDto {
    
    @IsNumber()
    @IsPositive()
    empleado: number;

    @IsNumber()
    @IsPositive()
    mes: number;
}