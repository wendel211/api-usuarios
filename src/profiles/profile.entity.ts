import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @ManyToOne(() => User, (user) => user.profiles, { onDelete: 'CASCADE' })
  user: User;
}
