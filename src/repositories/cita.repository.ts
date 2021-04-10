import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources/postgres.datasource';
import {Cita, CitaRelations, Profesional, Usuarios} from '../models';
import {ProfesionalRepository} from './profesional.repository';
import {UsuariosRepository} from './usuarios.repository';

export class CitaRepository extends DefaultCrudRepository<
  Cita,
  typeof Cita.prototype.idcita,
  CitaRelations
> {

  public readonly CitaProfesional: BelongsToAccessor<Profesional, typeof Cita.prototype.idcita>;

  public readonly CitaUsuario: BelongsToAccessor<Usuarios, typeof Cita.prototype.idcita>;

  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource, @repository.getter('ProfesionalRepository') protected profesionalRepositoryGetter: Getter<ProfesionalRepository>, @repository.getter('UsuariosRepository') protected usuariosRepositoryGetter: Getter<UsuariosRepository>,
  ) {
    super(Cita, dataSource);
    this.CitaUsuario = this.createBelongsToAccessorFor('CitaUsuario', usuariosRepositoryGetter,);
    this.registerInclusionResolver('CitaUsuario', this.CitaUsuario.inclusionResolver);
    this.CitaProfesional = this.createBelongsToAccessorFor('CitaProfesional', profesionalRepositoryGetter,);
    this.registerInclusionResolver('CitaProfesional', this.CitaProfesional.inclusionResolver);
  }
}
