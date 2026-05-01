import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { OISIndex, PedagogicalToken, InstructionalPattern, PedagogicalTheme, RendererProfile, ValidationRule } from "@ois/spec";

const __dirname = dirname(fileURLToPath(import.meta.url));

let _index: OISIndex | null = null;

function getIndex(): OISIndex {
  if (_index) return _index;
  const p = join(__dirname, "../dist/ois-index.json");
  if (!existsSync(p)) throw new Error("ois-index.json not found. Run: pnpm build");
  _index = JSON.parse(readFileSync(p, "utf-8")) as OISIndex;
  return _index;
}

export function getTokenById(id: string): PedagogicalToken | undefined {
  return getIndex().tokens.find(t => t.id === id);
}

export function getTokensByCategory(category: string): PedagogicalToken[] {
  return getIndex().tokens.filter(t => t.category === category);
}

export function getPatternById(id: string): InstructionalPattern | undefined {
  return getIndex().patterns.find(p => p.id === id);
}

export function getThemeById(id: string): PedagogicalTheme | undefined {
  return getIndex().themes.find(t => t.id === id);
}

export function getRendererById(id: string): RendererProfile | undefined {
  return getIndex().renderers.find(r => r.id === id);
}

export function getValidationRuleById(id: string): ValidationRule | undefined {
  return getIndex().validationRules.find(r => r.id === id);
}

export function getRegistry(): OISIndex {
  return getIndex();
}
