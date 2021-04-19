import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PostgresDataSource} from '../datasources/postgres.datasource';
import {Profesional, ProfesionalRelations, ProfesionalAgenda, Cita} from '../models';
import {ProfesionalAgendaRepository} from './profesional-agenda.repository';
import {CitaRepository} from './cita.repository';

export class ProfesionalRepository extends DefaultCrudRepository<
  Profesional,
  typeof Profesional.prototype.idusuario,
  ProfesionalRelations
> {

  public readonly profesionalAgenda: HasManyRepositoryFactory<ProfesionalAgenda, typeof Profesional.prototype.idusuario>;

  public readonly ProfesionalCitas: HasManyRepositoryFactory<Cita, typeof Profesional.prototype.idusuario>;

  public readonly ProfesionalAgendas: HasManyRepositoryFactory<ProfesionalAgenda, typeof Profesional.prototype.idusuario>;

  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource, @repository.getter('ProfesionalAgendaRepository') protected profesionalAgendaRepositoryGetter: Getter<ProfesionalAgendaRepository>, @repository.getter('CitaRepository') protected citaRepositoryGetter: Getter<CitaRepository>,
  ) {
    super(Profesional, dataSource);
    this.ProfesionalAgendas = this.createHasManyRepositoryFactoryFor('ProfesionalAgendas', profesionalAgendaRepositoryGetter,);
    this.registerInclusionResolver('ProfesionalAgendas', this.ProfesionalAgendas.inclusionResolver);
    this.ProfesionalCitas = this.createHasManyRepositoryFactoryFor('ProfesionalCitas', citaRepositoryGetter,);
    this.registerInclusionResolver('ProfesionalCitas', this.ProfesionalCitas.inclusionResolver);
    this.profesionalAgenda = this.createHasManyRepositoryFactoryFor('profesionalAgenda', profesionalAgendaRepositoryGetter,);
    this.registerInclusionResolver('profesionalAgenda', this.profesionalAgenda.inclusionResolver);
  }
}
