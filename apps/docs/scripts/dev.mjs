import { spawn } from 'node:child_process';
import { createServer } from 'node:net';

const host = process.env.HOSTNAME ?? '127.0.0.1';
const preferredPort = Number.parseInt(process.env.PORT ?? '3000', 10);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/hoi4-modding-tools';
const nextBin = process.platform === 'win32' ? 'next.cmd' : 'next';

function canListen(port) {
  return new Promise((resolve) => {
    const server = createServer();

    server.once('error', () => resolve(false));
    server.once('listening', () => {
      server.close(() => resolve(true));
    });
    server.listen(port, host);
  });
}

async function findPort(start) {
  if (process.env.PORT) {
    return start;
  }

  for (let port = start; port < start + 20; port += 1) {
    if (await canListen(port)) {
      return port;
    }
  }

  return start;
}

const port = await findPort(preferredPort);
const origin = `http://${host}:${port}`;
const args = [
  'dev',
  ...process.argv.slice(2),
  '--hostname',
  host,
  '--port',
  String(port),
];

console.log('');
console.log('Docs local URLs:');
console.log(`  English: ${origin}${basePath}/en/docs`);
console.log(`  Chinese: ${origin}${basePath}/zh-CN/docs`);
console.log('');

const child = spawn(nextBin, args, {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
