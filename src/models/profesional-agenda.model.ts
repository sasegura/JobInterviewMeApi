import {Entity, model, property} from '@loopback/repository';

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
    type: 'number',
    required: true,
    scale: 0,
    id: 2,
    postgresql: {columnName: 'idprofesional', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
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
