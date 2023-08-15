import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrabajadorSalarioModule } from './trabajador-salario/trabajador-salario.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.DB_HOST,
    //   port: +process.env.DB_PORT,
    //   database: process.env.DB_NAME,
    //   username: process.env.DB_USER,
    //   password: process.env.DB_PSW,
    // }),
    TrabajadorSalarioModule
  ],
})
export class AppModule {}
