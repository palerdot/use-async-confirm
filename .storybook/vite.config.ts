import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vitest/config'
import tailwindcss from 'tailwindcss'
import type { UserConfigExport } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [tsconfigPaths(), react()],
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
    resolve: {
      alias: {
        // '@': path.resolve(__dirname, './stories'),
      },
    },
  })
}
// https://vitejs.dev/config/
export default app
