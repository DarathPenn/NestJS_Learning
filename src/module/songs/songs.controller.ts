import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';

import { SongsService } from 'src/module/songs/songs.service';
import { SongDTO } from 'src/module/songs/dto/song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songService: SongsService) {}
  @Get()
  findAllSong() {
    return this.songService.getSong();
  }
  @Get(':id')
  findOneSong(@Param('id') id: string) {
    return this.songService.getOneSong(id);
  }
  @HttpCode(201)
  @Post()
  createSong(@Body() body: SongDTO) {
    return this.songService.createSong(body);
  }
  @Delete(':id')
  deleteSong(@Param('id') id: string) {
    return this.songService.deleteSong(id);
  }
}
