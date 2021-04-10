import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Profesional} from './profesional.model';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'profesionalAgenda'}}
})
export class ProfesionalAgenda extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'idagenda', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idagenda: number;
  @property({
    type: 'string',
    postgresql: {columnName: 'diasemana', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  diasemana?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'horainicio', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  horainicio?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'horafin', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  horafin?: string;

  @belongsTo(() => Profesional, {name: 'profAgenda'})
  idprofesional: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ProfesionalAgenda>) {
    super(data);
  }
}

export interface ProfesionalAgendaRelations {
  // describe navigational properties here
}

export type ProfesionalAgendaWithRelations = ProfesionalAgenda & ProfesionalAgendaRelations;
