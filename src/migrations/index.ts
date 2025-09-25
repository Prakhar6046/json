import * as migration_20250903_111141 from './20250903_111141';
import * as migration_20250903_111353 from './20250903_111353';
import * as migration_20250908_153151 from './20250908_153151';
import * as migration_20250917_124056 from './20250917_124056';
import * as migration_20250917_132554 from './20250917_132554';
import * as migration_20250917_163446 from './20250917_163446';
import * as migration_20250917_172457 from './20250917_172457';
import * as migration_20250918_161807 from './20250918_161807';
import * as migration_20250918_161844 from './20250918_161844';

export const migrations = [
  {
    up: migration_20250903_111141.up,
    down: migration_20250903_111141.down,
    name: '20250903_111141',
  },
  {
    up: migration_20250903_111353.up,
    down: migration_20250903_111353.down,
    name: '20250903_111353',
  },
  {
    up: migration_20250908_153151.up,
    down: migration_20250908_153151.down,
    name: '20250908_153151',
  },
  {
    up: migration_20250917_124056.up,
    down: migration_20250917_124056.down,
    name: '20250917_124056',
  },
  {
    up: migration_20250917_132554.up,
    down: migration_20250917_132554.down,
    name: '20250917_132554',
  },
  {
    up: migration_20250917_163446.up,
    down: migration_20250917_163446.down,
    name: '20250917_163446',
  },
  {
    up: migration_20250917_172457.up,
    down: migration_20250917_172457.down,
    name: '20250917_172457',
  },
  {
    up: migration_20250918_161807.up,
    down: migration_20250918_161807.down,
    name: '20250918_161807',
  },
  {
    up: migration_20250918_161844.up,
    down: migration_20250918_161844.down,
    name: '20250918_161844'
  },
];
