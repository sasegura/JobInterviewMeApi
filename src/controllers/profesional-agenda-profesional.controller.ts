import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ProfesionalAgenda,
  Profesional,
} from '../models';
import {ProfesionalAgendaRepository} from '../repositories';

export class ProfesionalAgendaProfesionalController {
  constructor(
    @repository(ProfesionalAgendaRepository)
    public profesionalAgendaRepository: ProfesionalAgendaRepository,
  ) { }

  @get('/profesional-agenda/{id}/profesional', {
    responses: {
      '200': {
        description: 'Profesional belonging to ProfesionalAgenda',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Profesional)},
          },
        },
      },
    },
  })
  async getProfesional(
    @param.path.number('id') id: typeof ProfesionalAgenda.prototype.idagenda,
  ): Promise<Profesional> {
    return this.profesionalAgendaRepository.profAgenda(id);
  }
}
