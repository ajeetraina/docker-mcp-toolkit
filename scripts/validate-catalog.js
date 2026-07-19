const { readFileSync } = require('node:fs');

const readme = readFileSync('README.md', 'utf8');

function countRows(heading, nextHeading) {
  const start = readme.indexOf(heading);
  const end = readme.indexOf(nextHeading, start);
  if (start < 0 || end < 0) throw new Error(`Missing catalogue section: ${heading}`);

  return readme
    .slice(start, end)
    .split('\n')
    .filter((line) => /^\| \d+ \|/.test(line)).length;
}

function declaredCount(pattern, label) {
  const match = readme.match(pattern);
  if (!match) throw new Error(`Missing declared ${label} count`);
  return Number(match[1]);
}

const clientCount = countRows('## List of MCP Clients', '## List of MCP Servers');
const serverCount = countRows('## List of MCP Servers', '## Using Docker MCP Toolkit');
const declaredClients = declaredCount(/There are currently (\d+) MCP clients available:/, 'client');

const serverMatch = readme.match(/There are currently (\d+) MCP servers available:/);
if (!serverMatch) throw new Error('Missing declared server count');
const actualDeclaredServers = Number(serverMatch[1]);

if (declaredClients !== clientCount) {
  throw new Error(`Client count mismatch: declared ${declaredClients}, found ${clientCount}`);
}
if (actualDeclaredServers !== serverCount) {
  throw new Error(`Server count mismatch: declared ${actualDeclaredServers}, found ${serverCount}`);
}

process.stdout.write(`Validated ${clientCount} clients and ${serverCount} servers.\n`);
