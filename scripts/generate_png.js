import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';

const svgPath = path.resolve(process.cwd(), 'public/logo.svg');
const svg = fs.readFileSync(svgPath, 'utf8');

const resvg = new Resvg(svg, {
  fitTo: {
    mode: 'width',
    value: 1000,
  },
  background: 'rgba(0,0,0,0)',
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

fs.writeFileSync(path.resolve(process.cwd(), 'public/logo.png'), pngBuffer);
fs.writeFileSync(path.resolve(process.cwd(), 'public/favicon.png'), pngBuffer);
console.log('Successfully generated public/logo.png and public/favicon.png! Size:', pngBuffer.length);
