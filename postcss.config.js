module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ["> 1%", "last 4 versions", "not ie <= 8"],
    },
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 1920,
      unitPrecision: 5,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [],
      landscape: false, // 是否处理横屏情况
      landscapeUnit: "vw",
      landscapeWidth: 1920, // 横屏时使用的视口宽度
    },
  },
};
