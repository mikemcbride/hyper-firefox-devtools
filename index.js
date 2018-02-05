'use strict'

const black = '#2a2a2e'
const white = '#97a4b3'//'#afb5bf'
const red = '#f27de9'
const green = '#02d269'
const yellow = '#fce197'
const blue = '#8db8fc'//'#6b89ff'
const magenta = '#b98ef9'
const cyan = '#72bbf9'
const lightBlack = '#353b48'//'#5c6d87'

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite: white
}

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark')

module.exports.decorateConfig = config => {
  const backgroundColor = black
  const foregroundColor = white
  const cursorColor = config.cursorColor || '#72bbf9'
  const borderColor = '#3c3c3d'
  const tabText = '#9393b2'
  const tabTextActive = '#fff'
  const dividerBg = '#3c3c3d'
  
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .tabs_title {
  			display: none !important;
  		}
      .tab_textInner {
        color: ${tabText};
        font-weight: 500;
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .splitpane_divider {
        background-color: ${dividerBg} !important;
      }
    `
  })
}
