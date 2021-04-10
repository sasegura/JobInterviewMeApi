import {Entity, model, property, hasMany} from '@loopback/repository';
import {ProfesionalAgenda} from './profesional-agenda.model';
import {Cita} from './cita.model';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'Profesional'}}
})
export class Profesional extends Entity {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'nombreperfil', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nombreperfil: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'annosexperiencia', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  annosexperiencia: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'experiencia', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  experiencia: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'tipopreparacion', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  tipopreparacion?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'tarifa', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  tarifa?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'fechasnulas', dataType: 'ARRAY', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fechasnulas?: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'idusuario', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idusuario: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'imagen', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  imagen?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'evaluacion', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  evaluacion?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'hashtags', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  hashtags?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'sectores', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  sectores?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'idiomas', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  idiomas?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'canales', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  canales?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'perfiles', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  perfiles?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'duracion', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  duracion?: string;

  @hasMany(() => ProfesionalAgenda, {keyTo: 'idprofesional'})
  profesionalAgenda: ProfesionalAgenda[];

  @hasMany(() => Cita, {keyTo: 'idprofesional'})
  ProfesionalCitas: Cita[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Profesional>) {
    super(data);
  }
}

export interface ProfesionalRelations {
  // describe navigational properties here
}

export type ProfesionalWithRelations = Profesional & ProfesionalRelations;
