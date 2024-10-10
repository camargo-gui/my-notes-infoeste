import { Priority } from '#/src/notes/domain/entities/priority.enum';
import { Expose } from 'class-transformer';
import { IsEnum, IsString } from 'class-validator';

export class UpdateNoteDto {
  @Expose()
  @IsString()
  title?: string;

  @Expose()
  @IsString()
  content?: string;

  @Expose()
  @IsEnum(Priority)
  priority?: Priority;
}
