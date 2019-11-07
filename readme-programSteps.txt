******参考Create React App 中文文档：https://www.html.cn/create-react-app/docs/getting-started/
Create React App 是一个官方支持的创建 React 单页应用程序的方法。它提供了一个零配置的现代构建设置。
你 无需 安装或配置 Webpack 或 Babel 等工具。 它们是预先配置好并且隐藏的，因此你可以专注于代码。只需创建一个项目，就可以了。
******在 react 中使用 ts 的几点原则和变化:（参考：https://blog.csdn.net/sinat_17775997/article/details/84203095；https://blog.csdn.net/sinat_17775997/article/details/94448354）
--->a) 所有用到jsx语法的文件都需要以tsx后缀命名
--->b) 使用组件声明时的Component<P, S>泛型参数声明，来代替PropTypes！
--->c) 全局变量或者自定义的window对象属性，统一在项目根下的global.d.ts中进行声明定义
--->d) 对于项目中常用到的接口数据对象，在types/目录下定义好其结构化类型声明
******react路由
###基于浏览器环境的开发，只需要安装react-router-dom；基于react-native环境的开发，只需要安装react-router-native。npm会自动解析react-router-dom包中package.json的依赖并安装。
###React-router
--->React-router提供了一些router的核心api，包括Router, Route, Switch等，但是它没有提供dom操作进行跳转的api。
###React-router-dom
--->React-router-dom提供了BrowserRouter, Route, Link等api,我们可以通过dom的事件控制路由。例如点击一个按钮进行跳转，大多数情况下我们是这种情况，所以在开发过程中，我们更多是使用React-router-dom
###react路由参考：http://react-china.org/t/react-router4/15843；https://www.jianshu.com/p/6a1a2f95ac6e

1. npm install -g yarn

******start 注意：以下不在开发中使用**********
_2. yarn add -g create-react-app
_3. create-react-app my-app --scripts-version=react-scripts-ts //react-scripts-ts是一系列适配器,它利用标准的create-react-app工程管道并把TypeScript混入进来.
******end 注意：使用create-react-app my-app --scripts-version=react-scripts-ts命令创建的项目默认使用tslint***********

2. yarn create react-app my-app --typescript
***注意：要将react等包的声明包(即，@types/xxx)放在devDependencies中,否则启动时会报错：Could not find a declaration file for module '**'
3. 项目中使用eslint+prettier--->详见readme-eslint.txt
4. npm install --save react-router-dom //react-router-dom是依赖react-router的,安装react-router-dom后,不需要安装react-router.
5. npm install -D @types/react-router-dom //安装react-router-dom的声明包
6. 在src下新建routes.tsx
7. 在index.tsx中引入routes
8. 在根目录新建.env可以修改配置，如：PORT=2000，将默认端口号改为2000