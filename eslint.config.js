import js from '@eslint/js'
import jsonPlugin from 'eslint-plugin-json'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
    js.configs.recommended,
    eslintConfigPrettier,
    {
        files: ['**/*.json'],
        plugins: {
            jsonPlugin,
            prettierPlugin,
        },
        processor: 'json/json',
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
        },
    },
]
