import { Controller,  Post, Body, ValidationPipe } from '@nestjs/common';
import { TrabajadorSalarioService } from './trabajador-salario.service';
import { CreateTrabajadorDto } from './dto/create-trabajador.dto';
import { EntregasDto } from './dto/entregas.dto';
import { SueldoEmpleadoDto } from './dto/empleado.dto';
import { InfoEmpleadoDto } from './dto/info-empleado.dto';
// import { UpdateTrabajadorSalarioDto } from './dto/update-trabajador-salario.dto';

@Controller('trabajador-salario')
export class TrabajadorSalarioController {
  constructor(private readonly trabajadorSalarioService: TrabajadorSalarioService) {}

  @Post('creartrabajador')
  async createEmpleado(@Body(new ValidationPipe()) createTrabajadorDto: CreateTrabajadorDto) {
    const { empleado, nombre, puesto } = createTrabajadorDto;
    const result = await this.trabajadorSalarioService.createEmpleado(empleado, nombre, puesto);
    return { message: 'Insert Exitoso', result };
  }

  @Post('obtenernumsig')
  async obtenerNumeroEmpSiguiente() {
    const result = await this.trabajadorSalarioService.obtenerNumeroEmpSiguiente();
    return { message: 'Exito', result };
  }

  @Post('obtenermeses')
  async obtenerMeses() {
    const result = await this.trabajadorSalarioService.obtenerMeses();
    return { message: 'Exito', result };
  }

  @Post('guardarentregas')
  async guardarEntregas(@Body(new ValidationPipe()) entregasDto: EntregasDto) {
    const { empleado, mes, entregas } = entregasDto;
    const result = await this.trabajadorSalarioService.guardarEntregas(empleado, mes, entregas);
    return { message: 'Exito', result };
  }

  @Post('sueldoempleado')
  async obtenerSueldo(@Body(new ValidationPipe()) sueldoEmpleadoDto: SueldoEmpleadoDto) {
    const { empleado, mes } = sueldoEmpleadoDto;
    const result = await this.trabajadorSalarioService.obtenerSueldo(empleado, mes);
    return { message: 'Exito', result };
  }
  
  @Post('obtenerempleados')
  async obtenerEmpleados() {
    const result = await this.trabajadorSalarioService.obtenerEmpleados();
    return { message: 'Exito', result };
  }

  @Post('obtenerinfoempleado')
  async obtenerInfoEmpleado(@Body(new ValidationPipe()) infoEmpleadoDto: InfoEmpleadoDto) {
    const { empleado } = infoEmpleadoDto;
    const result = await this.trabajadorSalarioService.obtenerInfoEmpleado(empleado);
    return { message: 'Exito', result };
  }
  
}
