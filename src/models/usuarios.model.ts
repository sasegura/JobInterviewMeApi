import {Entity, hasMany, model, property} from '@loopback/repository';
import {Cita} from './cita.model';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'Usuarios'}}
})
export class Usuarios extends Entity {
  @property({
    type: 'number',
    required: false,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'idusuario', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idusuario: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'correo', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  correo: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'nombre', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombre?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'apellidos', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  apellidos?: string;

  @hasMany(() => Cita, {keyTo: 'idusuario'})
  UsuarioCitas: Cita[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Usuarios>) {
    super(data);
  }
}

export interface UsuariosRelations {
  // describe navigational properties here
}

export type UsuariosWithRelations = Usuarios & UsuariosRelations;
