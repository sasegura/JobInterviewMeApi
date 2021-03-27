import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources/postgres.datasource';
import {Agenda, AgendaRelations} from '../models';

export class AgendaRepository extends DefaultCrudRepository<
  Agenda,
  typeof Agenda.prototype.idagenda,
  AgendaRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Agenda, dataSource);
  }
}
