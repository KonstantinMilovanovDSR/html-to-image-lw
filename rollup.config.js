import config from '@bubkoo/rollup-config'

export default config({
  output: [
    {
      name: 'htmlToImage',
      format: 'umd',
      file: 'dist/html-to-image-lw.js',
      sourcemap: true,
    },
  ],
})
