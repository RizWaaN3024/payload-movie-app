import * as migration_20250109_204135_initial from './20250109_204135_initial';
import * as migration_20250116_210359_movies from './20250116_210359_movies';

export const migrations = [
  {
    up: migration_20250109_204135_initial.up,
    down: migration_20250109_204135_initial.down,
    name: '20250109_204135_initial',
  },
  {
    up: migration_20250116_210359_movies.up,
    down: migration_20250116_210359_movies.down,
    name: '20250116_210359_movies'
  },
];
