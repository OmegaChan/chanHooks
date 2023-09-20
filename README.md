## 1. Generalization
A tool function library suitable for react.
## 2. Configuration process
1. The basic file output process of webpack and ts-loader, including converted js files and declaration files.
2. In order to solve the problem that the alias configuration in the output declaration file is not compiled correctly, the plugin ConvertAliasPlugin is customized to solve this problem.
3. In order to solve the conflict caused by the global introduction of lodash, which caused the npm package to report an error of undefined, loadsh was marked as an external expansion package. The same is true for third-party dependent libraries such as react.

## 3.