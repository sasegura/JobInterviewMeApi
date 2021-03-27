import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources/postgres.datasource';
import {Profesional, ProfesionalRelations} from '../models';

export class ProfesionalRepository extends DefaultCrudRepository<
  Profesional,
  typeof Profesional.prototype.idusuario,
  ProfesionalRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Profesional, dataSource);
  }
}
