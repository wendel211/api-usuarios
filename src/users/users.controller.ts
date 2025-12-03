import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  
  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso.' })
  findAll() {
    return { message: 'Lista de usuários', users: [] };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um usuário pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do usuário', example: '123' })
  @ApiResponse({ status: 200, description: 'Usuário encontrado.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  findOne(@Param('id') id: string) {
    return { message: `Usuário ${id} encontrado` };
  }

  @Post()
  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' })
  create(@Body() body: CreateUserDto) {
    return { message: 'Usuário criado com sucesso', data: body };
  }
}
