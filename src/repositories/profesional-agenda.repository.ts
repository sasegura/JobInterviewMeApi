import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources/postgres.datasource';
import {ProfesionalAgenda, ProfesionalAgendaRelations} from '../models';

export class ProfesionalAgendaRepository extends DefaultCrudRepository<
  ProfesionalAgenda,
  typeof ProfesionalAgenda.prototype.idagenda,
  ProfesionalAgendaRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(ProfesionalAgenda, dataSource);
  }
}
