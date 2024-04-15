// uno.config.ts
import {presetIcons, presetWind, defineConfig} from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        'display': 'inline-block' // 设置图标样式，为inline-block
      }
    })
  ],
})