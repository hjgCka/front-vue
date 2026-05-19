### 安装

执行 npm init -y 会生成package.json文件，后续安装的依赖都会被记录在package.json文件。

npm默认局部安装和开发依赖，但是要加上-D(--save-dev)即这个依赖是开发依赖。

### 编译ts文件

非全局安装时，使用`npx tsc`命令编译ts文件。

它会默认将目录和子目录下的ts文件进行编译，可以在tsconfig.json指定要编译的文件。
如果tsc命令指定了ts文件，会忽略tsconfig.json，这时运行需要加上参数，比如：`npx tsc hello.ts --ignoreConfig`。

调用package.json的script部分，不需要用npx。因为npm会自动将**node_modules/.bin**目录加入脚本的执行环境PATH。只需用`npm run 命令名称`即可。

### 监控ts文件

使用typescript插件自带的监视功能，保存文件后自动编译。

在package.json进行配置。

### 使用

在html链接编译好的js文件，使用type="module"时，需要在服务器访问，可用liveServer。

html中的script标签，不能自闭。


### tsc配置

tsc有很多配置，可以将配置写在tsconfig.json文件，这样运行时就可以不写参数。
```
通过执行 tsc --init 生成tsconfig.json文件。
```

module选项为es6时，编译好的js文件最后会出现`export {};`，导出一个空对象。

html引用这个js文件，无法导入得到任何东西。但是这会告诉浏览器，把它当作模块来处理。

使用时需要type="module"，并且这个js文件内部的代码依然会被执行。


