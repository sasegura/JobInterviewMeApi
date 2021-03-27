import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'Agenda'}}
})
export class Agenda extends Entity {
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
    postgresql: {columnName: 'diasemana', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  diasemana?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'horainicio', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  horainicio?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'horafin', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  horafin?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Agenda>) {
    super(data);
  }
}

export interface AgendaRelations {
  // describe navigational properties here
}

export type AgendaWithRelations = Agenda & AgendaRelations;
