import { Injectable } from '@nestjs/common';
import { Client } from "pg";

@Injectable()
export class TrabajadorSalarioService {

  private readonly client: Client;

  constructor(){
    this.client = new Client({
      user: process.env.DB_USER,
      password: process.env.DB_PSW,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      port: +process.env.DB_PORT,
    });

    this.client.connect();
  }

  async createEmpleado(empleado: number, nombre: string, puesto: number) {

    const query = 'select fn_insert_update_empleado as estatus from fn_insert_update_empleado($1, $2, $3)';
    const values = [empleado, nombre, puesto];

    const result = await this.client.query(query, values);
    return result.rows[0];

  }

  async obtenerNumeroEmpSiguiente(){
    const query = 'select fn_obtener_numempleado_siguiente as numsiguiente from fn_obtener_numempleado_siguiente()';    ;

    const result = await this.client.query(query);
    return result.rows[0];
  }

  async obtenerMeses(){
    const query = 'select mes_id, mes_nombre from obtener_meses()';

    const result = await this.client.query(query);
    return result.rows;
  }

  async guardarEntregas(empleado:number, mes:number, entregas:number){
    const query = 'select fn_insertar_entregas as resultado from fn_insertar_entregas($1, $2, $3)';
    const values = [empleado, mes, entregas];

    const result = await this.client.query(query, values);
    return result.rows;
  }

  async obtenerSueldo(empleado:number, mes:number){
    const query = 'select * from fn_obtener_sueldo($1, $2)';
    const values = [empleado, mes];

    const result = await this.client.query(query, values);
    return result.rows;
  }

  async obtenerEmpleados(){
    const query = 'select num_empleado, nombre_empleado from fnobtener_empleados()';

    const result = await this.client.query(query);
    return result.rows;
  }

  async obtenerInfoEmpleado(empleado:number){
    const query = 'select nombre_empleado, puesto from fninfo_empleado($1)';
    const values = [empleado];

    const result = await this.client.query(query, values);
    return result.rows;
  }

  //TODO:
  // funcion que con numero de emepleado traiga el nombre y el puesto
  //funcion que sin parametro traiga el numero y nombre de todos los empleados
  
  async onApplicationShutdown() {
    await this.client.end(); // Cierra la conexión al finalizar el servicio
  }

  
}
