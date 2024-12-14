import { Controller, Get, Param } from '@nestjs/common';

import { SongsService } from 'src/module/songs/songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songService: SongsService) {}
  @Get()
  findAllSong(): string {
    return this.songService.getSong();
  }
  @Get(':id')
  findOneSong(@Param('id') id: string): string {
    return this.songService.getOneSong(id);
  }
}
