import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  // Base configuration for Vue files
  {
    files: ['**/*.vue'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  // Configuration for Node.js files (API routes)
  {
    files: ['api/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    env: {
      node: true,
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
])
