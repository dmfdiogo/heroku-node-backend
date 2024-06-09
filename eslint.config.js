import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
    js.configs.recommended,
    eslintConfigPrettier,
    {
        plugins: {
            prettierPlugin,
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
        },
    },
]
