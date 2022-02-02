import { darken, lighten } from 'polished'

const GREY = '#86888a'
const GREEN = '#6aaa64'
const YELLOW = '#c9b458'
const WHITE = '#f1f1f1'
const theme = {
  button: {
    margin: '0 0.3em 0.4em 0',
    width: 2.75,
    widthSmall: 1.7,
    height: 2.75,
    font: {
      size: 1.25
    }
  },
  colors: {
    grey: GREY,
    green: GREEN,
    yellow: YELLOW,
    white: WHITE,
    light: {
      grey: lighten(0.4, GREY),
      green: lighten(0.25, GREEN),
      yellow: lighten(0.25, YELLOW),
      white: lighten(0.25, WHITE)
    },
    dark: {
      grey: darken(0.1, GREY),
      green: darken(0.1, GREEN),
      yellow: darken(0.1, YELLOW),
      white: darken(0.1, WHITE)
    }
  }
}

export default theme
