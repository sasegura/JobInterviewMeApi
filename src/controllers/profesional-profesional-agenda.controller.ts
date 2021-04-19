import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Profesional,
  ProfesionalAgenda,
} from '../models';
import {ProfesionalRepository} from '../repositories';

export class ProfesionalProfesionalAgendaController {
  constructor(
    @repository(ProfesionalRepository) protected profesionalRepository: ProfesionalRepository,
  ) { }

  @get('/profesionals/{id}/profesional-agenda', {
    responses: {
      '200': {
        description: 'Array of Profesional has many ProfesionalAgenda',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ProfesionalAgenda)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ProfesionalAgenda>,
  ): Promise<ProfesionalAgenda[]> {
    return this.profesionalRepository.ProfesionalAgendas(id).find(filter);
  }

  @post('/profesionals/{id}/profesional-agenda', {
    responses: {
      '200': {
        description: 'Profesional model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProfesionalAgenda)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Profesional.prototype.idusuario,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProfesionalAgenda, {
            title: 'NewProfesionalAgendaInProfesional',
            exclude: ['idagenda'],
            optional: ['idprofesional']
          }),
        },
      },
    }) profesionalAgenda: Omit<ProfesionalAgenda, 'idagenda'>,
  ): Promise<ProfesionalAgenda> {
    return this.profesionalRepository.ProfesionalAgendas(id).create(profesionalAgenda);
  }

  @patch('/profesionals/{id}/profesional-agenda', {
    responses: {
      '200': {
        description: 'Profesional.ProfesionalAgenda PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProfesionalAgenda, {partial: true}),
        },
      },
    })
    profesionalAgenda: Partial<ProfesionalAgenda>,
    @param.query.object('where', getWhereSchemaFor(ProfesionalAgenda)) where?: Where<ProfesionalAgenda>,
  ): Promise<Count> {
    return this.profesionalRepository.ProfesionalAgendas(id).patch(profesionalAgenda, where);
  }

  @del('/profesionals/{id}/profesional-agenda', {
    responses: {
      '200': {
        description: 'Profesional.ProfesionalAgenda DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ProfesionalAgenda)) where?: Where<ProfesionalAgenda>,
  ): Promise<Count> {
    return this.profesionalRepository.ProfesionalAgendas(id).delete(where);
  }
}
