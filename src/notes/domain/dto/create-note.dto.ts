import { CreateNoteRequestDto } from '#/src/notes/domain/dto/create-note-request.dto';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateNoteDto extends CreateNoteRequestDto {
  @Expose()
  @IsString()
  authorId: string;
}
