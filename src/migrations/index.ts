import * as migration_20250109_204135_initial from './20250109_204135_initial';

export const migrations = [
  {
    up: migration_20250109_204135_initial.up,
    down: migration_20250109_204135_initial.down,
    name: '20250109_204135_initial'
  },
];
