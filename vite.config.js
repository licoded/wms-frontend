/* eslint-disable */
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
/* eslint-enable */

function optimizedInclude() {
  return [
    'vue',
    'axios',
    'vue-router',
    'vue-i18n',
    '@intlify/vite-plugin-vue-i18n',
  ];
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, './src/i18n/locales/**'),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', 'json', 'css', 'scss', 'vue'],
  },
  optimizeDeps: {
    include: optimizedInclude(),
    exclude: [],
  },
  build: {
    sourcemap: true,
  },
});
