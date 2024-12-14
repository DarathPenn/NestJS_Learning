import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  getSong(): string {
    return 'All the songs are here';
  }
  getOneSong(id: string): string {
    return `This action return a number ${id}`;
  }
}
