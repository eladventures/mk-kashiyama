import { d as defineEventHandler, g as getQuery } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const sample_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  return `Hello ${query.name || "no name"}.`;
});

export { sample_get as default };
//# sourceMappingURL=sample.get.mjs.map
