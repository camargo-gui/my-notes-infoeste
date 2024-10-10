import { CreateNoteDto } from '#/src/notes/domain/dto/create-note.dto';
import { UpdateNoteDto } from '#/src/notes/domain/dto/update-note.dto';
import { NoteService } from '#/src/notes/domain/services/note.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('notes')
export class NotesController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async create(@Body() createNoteDto: CreateNoteDto) {
    return this.noteService.create(createNoteDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.noteService.delete(id);
  }

  @Get(':authorId')
  async findByAuthorId(@Param('authorId') authorId: string) {
    return this.noteService.findByAuthorId(authorId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.noteService.update(id, updateNoteDto);
  }
}
