import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PostgresDataSource} from '../datasources/postgres.datasource';
import {Usuarios, UsuariosRelations, Cita} from '../models';
import {CitaRepository} from './cita.repository';

export class UsuariosRepository extends DefaultCrudRepository<
  Usuarios,
  typeof Usuarios.prototype.idusuario,
  UsuariosRelations
> {

  public readonly UsuarioCitas: HasManyRepositoryFactory<Cita, typeof Usuarios.prototype.idusuario>;

  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource, @repository.getter('CitaRepository') protected citaRepositoryGetter: Getter<CitaRepository>,
  ) {
    super(Usuarios, dataSource);
    this.UsuarioCitas = this.createHasManyRepositoryFactoryFor('UsuarioCitas', citaRepositoryGetter,);
    this.registerInclusionResolver('UsuarioCitas', this.UsuarioCitas.inclusionResolver);
  }
}
