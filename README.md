## 1. link
- codesandbox： https://codesandbox.io/u/omegachan
## 2. usage
### 2.1 Use of npm packages
```bash
npm i chanhooks
pnpm i chanhooks
yarn add chanhooks
```
### 2.2 Debugging and development
github warehouse address: https://github.com/OmegaChan/chanHooks
```
git clone [link]
npm i
npm i yalc -g
npm run localPublishDev
# in your project
yalc add chanhooks
```
## 3. Generalization
A tool function library suitable for react.
## 4. Configuration process
1. The basic file output process of webpack and ts-loader, including converted js files and declaration files.
2. In order to solve the problem that the alias configuration in the output declaration file is not compiled correctly, the plugin ConvertAliasPlugin is customized to solve this problem.
3. In order to solve the conflict caused by the global introduction of lodash, which caused the npm package to report an error of undefined, loadsh was marked as an external expansion package. The same is true for third-party dependent libraries such as react.
4. Introduce babel to downgrade JS syntax. In order to solve the problem of undefined reported by babel when trying to package the npm package, change the chunks configuration in optimization from all to async.
5. Introducing eslint and prettier to standardize the code and resolve several conflicts between them. Use husky to pre-check code submissions
6. Use tsc-alias to solve the alias exception problem after tsc compilation, and use swc to replace babel