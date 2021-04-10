import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources/postgres.datasource';
import {Profesional, ProfesionalAgenda, ProfesionalAgendaRelations} from '../models';
import {ProfesionalRepository} from './profesional.repository';

export class ProfesionalAgendaRepository extends DefaultCrudRepository<
  ProfesionalAgenda,
  typeof ProfesionalAgenda.prototype.idagenda,
  ProfesionalAgendaRelations
> {

  public readonly profAgenda: BelongsToAccessor<Profesional, typeof ProfesionalAgenda.prototype.idagenda>;

  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource, @repository.getter('ProfesionalRepository') protected profesionalRepositoryGetter: Getter<ProfesionalRepository>,
  ) {
    super(ProfesionalAgenda, dataSource);
    this.profAgenda = this.createBelongsToAccessorFor('profAgenda', profesionalRepositoryGetter,);
    this.registerInclusionResolver('profAgenda', this.profAgenda.inclusionResolver);
  }
}
