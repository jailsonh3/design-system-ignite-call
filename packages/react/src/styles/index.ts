import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  getCssText,
  config,
  keyframes,
  globalCss,
  theme,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },
  theme: {
    colors,
    fonts,
    fontWeights,
    fontSizes,
    radii,
    lineHeights,
    space,
  },
})
