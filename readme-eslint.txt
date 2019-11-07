eslint prettier 规范ts+react代码，参考：https://segmentfault.com/a/1190000019661168
结合prettier和eslint来规范react+ts代码：
1.安装eslint依赖：
### npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react
--->eslint: ESLint的核心代码
--->@typescript-eslint/parser：ESLint的解析器，用于解析typescript，从而检查和规范Typescript代码
--->@typescript-eslint/eslint-plugin：这是一个ESLint插件，包含了各类定义好的检测Typescript代码的规范
--->为了检测和规范React代码的书写必须安装插件eslint-plugin-react
2. 在根目录下新建.eslintrc文件，该文件中定义了ESLint的基础配置。
3. 安装prettier依赖：
### npm install -D prettier eslint-config-prettier eslint-plugin-prettier
--->prettier：prettier插件的核心代码
--->eslint-config-prettier：解决ESLint中的样式规范和prettier中样式规范的冲突，以prettier的样式规范为准，使ESLint中的样式规范自动失效
--->eslint-plugin-prettier：将prettier作为ESLint规范来使用
4. 在根目录下新建.prettierrc文件，该文件中定义了ESLint的基础配置。

npm install -D eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-jsx-control-statements babel-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser