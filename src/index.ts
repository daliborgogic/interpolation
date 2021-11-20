import { defineNuxtModule, addPluginTemplate } from '@nuxt/kit'
import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url'

const file = fileURLToPath(import.meta.url)
const __dirname = dirname(file)

export default defineNuxtModule({
  name: 'interpolation',
  configKey: 'interpolation',
  setup(options, nuxt) {
    addPluginTemplate({
      src: resolve(__dirname, './plugin.mjs'),
      filename: '',
      options
    })

    nuxt.options.vue.compilerOptions = {
      directiveTransforms: {
        interpolation: () => ({
          props: [],
          needRuntime: true
        })
      }
    }
  }
})