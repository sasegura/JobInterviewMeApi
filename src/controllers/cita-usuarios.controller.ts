import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Cita,
  Usuarios,
} from '../models';
import {CitaRepository} from '../repositories';

export class CitaUsuariosController {
  constructor(
    @repository(CitaRepository)
    public citaRepository: CitaRepository,
  ) { }

  @get('/citas/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Usuarios belonging to Cita',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuarios)},
          },
        },
      },
    },
  })
  async getUsuarios(
    @param.path.number('id') id: typeof Cita.prototype.idcita,
  ): Promise<Usuarios> {
    return this.citaRepository.CitaUsuario(id);
  }
}
