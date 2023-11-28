module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        // "plugin:prettier/recommended",
        "plugin:react/recommended",
        "standard-with-typescript",
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
    ],
    "rules": {
        "prettier/prettier": "error",
        "space-before-function-paren": ["error", "always"],
        "@typescript-eslint/semi": ["off"],
        "@typescript-eslint/no-confusing-void-expression": ["off"], // 关闭箭头函数，需要花括号的限制
        "@typescript-eslint/comma-dangle": ["off"], // 关闭对象最后一项逗号
        "@typescript-eslint/member-delimiter-style": ["off"], // 关闭intrerface声明中不能以分号结尾的限制
        "@typescript-eslint/strict-boolean-expressions": ["off"], // 关闭条件判断时，严格的布尔值判断
        "@typescript-eslint/space-before-function-paren": ["off"], // 关闭函数后空格
        "space-before-function-paren": ["off"],
        "@typescript-eslint/array-type": ["off"], // 允许使用尖括号语法
    },
}
