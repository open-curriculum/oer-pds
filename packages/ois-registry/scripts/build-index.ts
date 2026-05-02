import { readFileSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import type {
  OISIndex,
  PedagogicalToken,
  InstructionalPattern,
  PedagogicalTheme,
  RendererProfile,
  ValidationRule,
} from '@ois/spec';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, '../data');
const distDir = join(__dirname, '../dist');
const docsPublicDir = join(__dirname, '../../apps/docs/public');

function loadYamlDir<T>(dir: string): T[] {
  const results: T[] = [];
  let files: string[];
  try {
    files = readdirSync(dir).filter(
      (f) => f.endsWith('.yml') || f.endsWith('.yaml'),
    );
  } catch {
    return results;
  }
  for (const file of files) {
    const content = readFileSync(join(dir, file), 'utf-8');
    const parsed = yaml.load(content);
    if (Array.isArray(parsed)) {
      results.push(...(parsed as T[]));
    } else if (parsed) {
      results.push(parsed as T);
    }
  }
  return results;
}

const tokens = loadYamlDir<PedagogicalToken>(join(dataDir, 'tokens'));
const patterns = loadYamlDir<InstructionalPattern>(join(dataDir, 'patterns'));
const themes = loadYamlDir<PedagogicalTheme>(join(dataDir, 'themes'));
const renderers = loadYamlDir<RendererProfile>(join(dataDir, 'renderers'));
const validationRules = loadYamlDir<ValidationRule>(
  join(dataDir, 'validation-rules'),
);

const index: OISIndex = {
  version: '0.1.0-alpha',
  generatedAt: new Date().toISOString(),
  tokens,
  patterns,
  themes,
  renderers,
  validationRules,
};

const json = JSON.stringify(index, null, 2);

mkdirSync(distDir, { recursive: true });
writeFileSync(join(distDir, 'ois-index.json'), json, 'utf-8');
console.log(
  `Written: dist/ois-index.json (${tokens.length} tokens, ${patterns.length} patterns, ${themes.length} themes)`,
);

mkdirSync(docsPublicDir, { recursive: true });
writeFileSync(join(docsPublicDir, 'ois-index.json'), json, 'utf-8');
console.log('Copied: apps/docs/public/ois-index.json');
