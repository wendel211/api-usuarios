import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  
  @ApiProperty({ example: 'João Silva', description: 'Nome completo do usuário' })
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  name: string;

  @ApiProperty({ example: 'joao@email.com', description: 'E-mail do usuário' })
  @IsEmail({}, { message: 'O e-mail informado é inválido.' })
  email: string;

  @ApiProperty({ example: '123456', description: 'Senha do usuário (mínimo 6 caracteres)' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
  password: string;
}
