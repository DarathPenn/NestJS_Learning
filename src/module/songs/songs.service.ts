import { Injectable, NotFoundException } from '@nestjs/common';
import { SongDTO } from 'src/module/songs/dto/song.dto';
import { SongEntity } from 'src/module/songs/entity/song.entity';

@Injectable()
export class SongsService {
  allSong: SongEntity[] = [];
  getSong() {
    return this.allSong;
  }
  getOneSong(id: string): SongEntity {
    const song = this.allSong.find((item) => item.id === id);
    if (!song) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }
    return song;
  }
  createSong(songdto: SongDTO): SongEntity {
    const song = new SongEntity(songdto);
    this.allSong.push(song);
    return song;
  }
  deleteSong(id: string): string {
    const song = this.allSong.find((item) => item.id === id);
    console.log(song);
    const songIdex = this.allSong.indexOf(song);
    console.log(songIdex);
    if (songIdex === -1) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }
    this.allSong.splice(songIdex, 1);
    return `Song with ID ${id} not found was deleted`;
  }
}
