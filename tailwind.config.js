const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@bizappzone/castle-ui-tailwindcss/castle-ui-base'),
    require('@bizappzone/castle-ui-tailwindcss/castle-ui-blue-theme'),
  ],
  content: [
    join(
      __dirname,
      'node_modules/@bizappzone/**/!(*.stories|*.spec).{ts,html,mjs,scss}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html,scss}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@bizappzone/castle-ui-tailwindcss')],
};
