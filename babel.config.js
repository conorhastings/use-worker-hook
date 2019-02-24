module.exports = {
  env: {
    cjs: {
      presets: ['@babel/env']
    },
    esm: {
      presets: [
        [
          '@babel/env',
          {
            modules: false
          }
        ]
      ]
    }
  }
};