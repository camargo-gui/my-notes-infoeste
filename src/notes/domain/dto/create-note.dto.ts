import { Priority } from '#/src/notes/domain/entities/priority.enum';
import { Expose } from 'class-transformer';
import { IsEnum, IsString } from 'class-validator';

export class CreateNoteDto {
  @Expose()
  @IsString()
  title: string;

  @Expose()
  @IsString()
  content: string;

  @Expose()
  @IsString()
  authorId: string;

  @Expose()
  @IsEnum(Priority)
  priority: Priority;
}
