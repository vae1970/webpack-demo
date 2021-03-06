// http://eslint.cn/docs/user-guide/configuring
// eslint规范配置文件
module.exports = {

    root: true,                 // 限定配置文件的使用范围
    parserOptions: {             // 设置解析器选项
        // ecmaVersion: 2018
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    env: {                      // 指定代码运行的宿主环境
        browser: true,
    },
    extends: [                  // 指定eslint规范
        'standard',
        "plugin:vue/recommended",
        "plugin:vue/base",
        // 'plugin:vue/essential'
    ],

    // "off" 或 0 - 关闭规则
    // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
    rules: {                                 // 启用额外的规则或覆盖默认的规则
        "extends": "eslint:recommended",    // 启用推荐规则
        "indent": [2, 4],//缩进风格
        "semi": [0],
        "no-new": "off"
    },
    // "globals": { "var1": true,"var2": false }    // 配置全局变量
};
