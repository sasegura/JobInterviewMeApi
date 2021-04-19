import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Profesional} from './profesional.model';
import {Usuarios} from './usuarios.model';

@model({settings: {idInjection: false, postgresql: {schema: 'public', table: 'Cita'}}})
export class Cita extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'idcita', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idcita: number;
  @property({
    type: 'string',
    postgresql: {columnName: 'fecha', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fecha?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'hora', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  hora?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'confirmada', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  confirmada?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'canales', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  canales?: string;

  @belongsTo(() => Profesional, {name: 'CitaProfesional'})
  idprofesional: number;

  @belongsTo(() => Usuarios, {name: 'CitaUsuario'})
  idusuario: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cita>) {
    super(data);
  }
}

export interface CitaRelations {
  // describe navigational properties here
}

export type CitaWithRelations = Cita & CitaRelations;
