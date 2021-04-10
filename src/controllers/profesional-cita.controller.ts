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
  Cita,
} from '../models';
import {ProfesionalRepository} from '../repositories';

export class ProfesionalCitaController {
  constructor(
    @repository(ProfesionalRepository) protected profesionalRepository: ProfesionalRepository,
  ) { }

  @get('/profesionals/{id}/citas', {
    responses: {
      '200': {
        description: 'Array of Profesional has many Cita',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cita)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Cita>,
  ): Promise<Cita[]> {
    return this.profesionalRepository.ProfesionalCitas(id).find(filter);
  }

  @post('/profesionals/{id}/citas', {
    responses: {
      '200': {
        description: 'Profesional model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cita)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Profesional.prototype.idusuario,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cita, {
            title: 'NewCitaInProfesional',
            exclude: ['idcita'],
            optional: ['idprofesional']
          }),
        },
      },
    }) cita: Omit<Cita, 'idcita'>,
  ): Promise<Cita> {
    return this.profesionalRepository.ProfesionalCitas(id).create(cita);
  }

  @patch('/profesionals/{id}/citas', {
    responses: {
      '200': {
        description: 'Profesional.Cita PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cita, {partial: true}),
        },
      },
    })
    cita: Partial<Cita>,
    @param.query.object('where', getWhereSchemaFor(Cita)) where?: Where<Cita>,
  ): Promise<Count> {
    return this.profesionalRepository.ProfesionalCitas(id).patch(cita, where);
  }

  @del('/profesionals/{id}/citas', {
    responses: {
      '200': {
        description: 'Profesional.Cita DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Cita)) where?: Where<Cita>,
  ): Promise<Count> {
    return this.profesionalRepository.ProfesionalCitas(id).delete(where);
  }
}
