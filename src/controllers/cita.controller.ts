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
import {Cita} from '../models';
import {CitaRepository} from '../repositories';

export class CitaController {
  constructor(
    @repository(CitaRepository)
    public citaRepository : CitaRepository,
  ) {}

  @post('/citas')
  @response(200, {
    description: 'Cita model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cita)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cita, {
            title: 'NewCita',
            exclude: ['idcita'],
          }),
        },
      },
    })
    cita: Omit<Cita, 'idcita'>,
  ): Promise<Cita> {
    return this.citaRepository.create(cita);
  }

  @get('/citas/count')
  @response(200, {
    description: 'Cita model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cita) where?: Where<Cita>,
  ): Promise<Count> {
    return this.citaRepository.count(where);
  }

  @get('/citas')
  @response(200, {
    description: 'Array of Cita model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cita, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cita) filter?: Filter<Cita>,
  ): Promise<Cita[]> {
    return this.citaRepository.find(filter);
  }

  @patch('/citas')
  @response(200, {
    description: 'Cita PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cita, {partial: true}),
        },
      },
    })
    cita: Cita,
    @param.where(Cita) where?: Where<Cita>,
  ): Promise<Count> {
    return this.citaRepository.updateAll(cita, where);
  }

  @get('/citas/{id}')
  @response(200, {
    description: 'Cita model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cita, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Cita, {exclude: 'where'}) filter?: FilterExcludingWhere<Cita>
  ): Promise<Cita> {
    return this.citaRepository.findById(id, filter);
  }

  @patch('/citas/{id}')
  @response(204, {
    description: 'Cita PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cita, {partial: true}),
        },
      },
    })
    cita: Cita,
  ): Promise<void> {
    await this.citaRepository.updateById(id, cita);
  }

  @put('/citas/{id}')
  @response(204, {
    description: 'Cita PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cita: Cita,
  ): Promise<void> {
    await this.citaRepository.replaceById(id, cita);
  }

  @del('/citas/{id}')
  @response(204, {
    description: 'Cita DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.citaRepository.deleteById(id);
  }
}
