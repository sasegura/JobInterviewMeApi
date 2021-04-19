import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody,
  response
} from '@loopback/rest';
import {Profesional} from '../models';
import {ProfesionalRepository} from '../repositories';

export class ProfesionalController {
  constructor(
    @repository(ProfesionalRepository)
    public profesionalRepository: ProfesionalRepository,
  ) { }

  @post('/profesionals')
  @response(200, {
    description: 'Profesional model instance',
    content: {'application/json': {schema: getModelSchemaRef(Profesional)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profesional, {
            title: 'NewProfesional',
          }),
        },
      },
    })
    profesional: Omit<Profesional, 'idusuario'>,
  ): Promise<Profesional> {
    return this.profesionalRepository.create(profesional);
  }

  @get('/profesionals/count')
  @response(200, {
    description: 'Profesional model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Profesional) where?: Where<Profesional>,
  ): Promise<Count> {
    return this.profesionalRepository.count(where);
  }

  @get('/profesionals')
  @response(200, {
    description: 'Array of Profesional model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Profesional, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Profesional) filter?: Filter<Profesional>,
  ): Promise<Profesional[]> {
    return this.profesionalRepository.find(filter);
  }

  @patch('/profesionals')
  @response(200, {
    description: 'Profesional PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profesional, {partial: true}),
        },
      },
    })
    profesional: Profesional,
    @param.where(Profesional) where?: Where<Profesional>,
  ): Promise<Count> {
    return this.profesionalRepository.updateAll(profesional, where);
  }

  @get('/profesionals/{id}')
  @response(200, {
    description: 'Profesional model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Profesional, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Profesional, {exclude: 'where'}) filter?: FilterExcludingWhere<Profesional>
  ): Promise<Profesional> {
    return this.profesionalRepository.findById(id, filter);
  }

  @patch('/profesionals/{id}')
  @response(204, {
    description: 'Profesional PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profesional, {partial: true}),
        },
      },
    })
    profesional: Profesional,
  ): Promise<void> {
    await this.profesionalRepository.updateById(id, profesional);
  }

  @put('/profesionals/{id}')
  @response(204, {
    description: 'Profesional PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() profesional: Profesional,
  ): Promise<void> {
    await this.profesionalRepository.replaceById(id, profesional);
  }

  @del('/profesionals/{id}')
  @response(204, {
    description: 'Profesional DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.profesionalRepository.deleteById(id);
  }
}
