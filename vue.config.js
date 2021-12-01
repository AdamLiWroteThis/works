module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/works" : "/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "李骏同学的作品集";
      return args;
    });
  },
};
