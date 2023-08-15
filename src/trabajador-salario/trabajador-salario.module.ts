import { Module } from '@nestjs/common';
import { TrabajadorSalarioService } from './trabajador-salario.service';
import { TrabajadorSalarioController } from './trabajador-salario.controller';

@Module({
  controllers: [TrabajadorSalarioController],
  providers: [TrabajadorSalarioService]
})
export class TrabajadorSalarioModule {}
