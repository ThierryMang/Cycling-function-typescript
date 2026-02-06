import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom', 
    include: ['source/tests/**/*.test.ts'], // Ne teste QUE les fichiers TS dans source
    server: {
      deps: {
        inline: [/@csstools/, /@asamuzakjp/] 
      }
    },
    deps: {
        optimizer: {
            web: {
                enabled: true // Aide à la résolution des modules web dans JSDOM
            }
        }
    }
    },
})