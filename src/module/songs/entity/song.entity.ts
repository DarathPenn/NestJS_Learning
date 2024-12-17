import { SongDTO } from 'src/module/songs/dto/song.dto';

export class SongEntity {
  constructor(dto: SongDTO) {
    this.duration = dto.duration;
    this.songname = dto.songname;
    this.id = Math.random().toString(36).substring(1, 9);
  }
  songname: string;
  duration: number;
  id: string;
}
