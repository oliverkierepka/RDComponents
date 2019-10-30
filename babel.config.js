module.exports = function (api) {
    api.cache(true);
  
    const presets = [
        ["@babel/preset-env",
        {
            "modules": false,
            "targets": {
                "browsers": [
                    "last 2 versions"
                ]
            },
            "useBuiltIns": "usage",
            "corejs": { 
                version: 3, 
                proposals: true 
            }
        }],
        "@babel/preset-typescript",
      ];

      const plugins = [
        "@babel/plugin-transform-typescript"
      ];
  
    return {
      presets,
      plugins
    };
  }