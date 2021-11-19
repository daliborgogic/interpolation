import path from 'path'
import { defineNuxtModule, addPluginTemplate } from '@nuxt/kit'

export default defineNuxtModule({
  configKey: 'iterpolation',
  setup(options) {
    addPluginTemplate({
      src: path.resolve(__dirname, 'plugin.ts'),
      mode: 'client',
      // options,
      options: { ...options },
    })
  },
  // render: {
  //   bundleRenderer: {
  //     directives: {
  //       interpolation: function (vnode, dir) {
  //         const style = vnode.data.style || (vnode.data.style = {})
  //         style.backgroundColor = '#ff0016'
  //       }
  //     }
  //   }
  // }
})