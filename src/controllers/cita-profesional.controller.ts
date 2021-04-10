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
  Profesional,
} from '../models';
import {CitaRepository} from '../repositories';

export class CitaProfesionalController {
  constructor(
    @repository(CitaRepository)
    public citaRepository: CitaRepository,
  ) { }

  @get('/citas/{id}/profesional', {
    responses: {
      '200': {
        description: 'Profesional belonging to Cita',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Profesional)},
          },
        },
      },
    },
  })
  async getProfesional(
    @param.path.number('id') id: typeof Cita.prototype.idcita,
  ): Promise<Profesional> {
    return this.citaRepository.CitaProfesional(id);
  }
}
