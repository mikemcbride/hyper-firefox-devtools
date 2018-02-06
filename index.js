'use strict'

const black = '#0c0c0d'
const white = '#97a4b3'
const red = '#ff7de9'
const green = '#86de74'
const yellow = '#fff89e'
const blue = '#75bfff'
const magenta = '#b98eff'
const lightBlack = '#737373'

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan: blue,
  white,
  lightBlack,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: blue,
  lightWhite: white
}

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark')

module.exports.decorateConfig = config => {
  const backgroundColor = black
  const foregroundColor = white
  const cursorColor = config.cursorColor || blue
  const borderColor = '#3c3c3d'
  const tabText = 'rgba(249,249,250,.55)'
  const tabTextActive = '#f9f9fa'
  const dividerBg = 'rgba(255,255,255,0.15)'
  
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
