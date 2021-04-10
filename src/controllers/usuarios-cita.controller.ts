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
  Usuarios,
  Cita,
} from '../models';
import {UsuariosRepository} from '../repositories';

export class UsuariosCitaController {
  constructor(
    @repository(UsuariosRepository) protected usuariosRepository: UsuariosRepository,
  ) { }

  @get('/usuarios/{id}/citas', {
    responses: {
      '200': {
        description: 'Array of Usuarios has many Cita',
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
    return this.usuariosRepository.UsuarioCitas(id).find(filter);
  }

  @post('/usuarios/{id}/citas', {
    responses: {
      '200': {
        description: 'Usuarios model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cita)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Usuarios.prototype.idusuario,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cita, {
            title: 'NewCitaInUsuarios',
            exclude: ['idcita'],
            optional: ['idusuario']
          }),
        },
      },
    }) cita: Omit<Cita, 'idcita'>,
  ): Promise<Cita> {
    return this.usuariosRepository.UsuarioCitas(id).create(cita);
  }

  @patch('/usuarios/{id}/citas', {
    responses: {
      '200': {
        description: 'Usuarios.Cita PATCH success count',
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
    return this.usuariosRepository.UsuarioCitas(id).patch(cita, where);
  }

  @del('/usuarios/{id}/citas', {
    responses: {
      '200': {
        description: 'Usuarios.Cita DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Cita)) where?: Where<Cita>,
  ): Promise<Count> {
    return this.usuariosRepository.UsuarioCitas(id).delete(where);
  }
}
