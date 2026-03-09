import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Album } from '../models/album.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const albums: Album[] = [
      { id: 1, userId: 1, title: 'First Album' },
      { id: 2, userId: 1, title: 'Second Album' }
    ];
    return { albums };
  }
}
