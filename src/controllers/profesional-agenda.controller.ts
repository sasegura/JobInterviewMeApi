import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ProfesionalAgenda} from '../models';
import {ProfesionalAgendaRepository} from '../repositories';

export class ProfesionalAgendaController {
  constructor(
    @repository(ProfesionalAgendaRepository)
    public profesionalAgendaRepository : ProfesionalAgendaRepository,
  ) {}

  @post('/profesional-agenda')
  @response(200, {
    description: 'ProfesionalAgenda model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProfesionalAgenda)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProfesionalAgenda, {
            title: 'NewProfesionalAgenda',
            exclude: ['idagenda'],
          }),
        },
      },
    })
    profesionalAgenda: Omit<ProfesionalAgenda, 'idagenda'>,
  ): Promise<ProfesionalAgenda> {
    return this.profesionalAgendaRepository.create(profesionalAgenda);
  }

  @get('/profesional-agenda/count')
  @response(200, {
    description: 'ProfesionalAgenda model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProfesionalAgenda) where?: Where<ProfesionalAgenda>,
  ): Promise<Count> {
    return this.profesionalAgendaRepository.count(where);
  }

  @get('/profesional-agenda')
  @response(200, {
    description: 'Array of ProfesionalAgenda model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProfesionalAgenda, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProfesionalAgenda) filter?: Filter<ProfesionalAgenda>,
  ): Promise<ProfesionalAgenda[]> {
    return this.profesionalAgendaRepository.find(filter);
  }

  @patch('/profesional-agenda')
  @response(200, {
    description: 'ProfesionalAgenda PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProfesionalAgenda, {partial: true}),
        },
      },
    })
    profesionalAgenda: ProfesionalAgenda,
    @param.where(ProfesionalAgenda) where?: Where<ProfesionalAgenda>,
  ): Promise<Count> {
    return this.profesionalAgendaRepository.updateAll(profesionalAgenda, where);
  }

  @get('/profesional-agenda/{id}')
  @response(200, {
    description: 'ProfesionalAgenda model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProfesionalAgenda, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProfesionalAgenda, {exclude: 'where'}) filter?: FilterExcludingWhere<ProfesionalAgenda>
  ): Promise<ProfesionalAgenda> {
    return this.profesionalAgendaRepository.findById(id, filter);
  }

  @patch('/profesional-agenda/{id}')
  @response(204, {
    description: 'ProfesionalAgenda PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProfesionalAgenda, {partial: true}),
        },
      },
    })
    profesionalAgenda: ProfesionalAgenda,
  ): Promise<void> {
    await this.profesionalAgendaRepository.updateById(id, profesionalAgenda);
  }

  @put('/profesional-agenda/{id}')
  @response(204, {
    description: 'ProfesionalAgenda PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() profesionalAgenda: ProfesionalAgenda,
  ): Promise<void> {
    await this.profesionalAgendaRepository.replaceById(id, profesionalAgenda);
  }

  @del('/profesional-agenda/{id}')
  @response(204, {
    description: 'ProfesionalAgenda DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.profesionalAgendaRepository.deleteById(id);
  }
}
