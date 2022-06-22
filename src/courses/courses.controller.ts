import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('list')
  fitAll(@Res() response): string {
    return response.status(200).send('Listagem de cursos');
  }
  @Get(':id')
  fitOne(@Param('id') id: string) {
    return `Curso #${id}`;
  }
  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createCourse(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Atualização do Curso #${id}`;
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string, @Body() body) {
    return `exclusão do Curso #${id}`;
  }
}
