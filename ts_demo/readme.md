### 安装

执行 npm init -y 会生成package.json文件，后续安装的依赖都会被记录在package.json文件。

默认局部安装，但是要加上-D(--save-dev)即这个依赖是开发依赖。

### 编译ts文件

非全局安装时，使用`npx tsc`命令编译ts文件。

它会默认将目录和子目录下的ts文件进行编译，可以在tsconfig.json指定要编译的文件。
如果tsc命令指定了ts文件，会忽略tsconfig.json，这时运行需要加上参数，比如：`npx tsc hello.ts --ignoreConfig`。

调用package.json的script部分，不需要用npx。因为npm会自动将**node_modules/.bin**目录加入脚本的执行环境PATH。只需用`npm run 命令名称`即可。


### tsc配置

tsc有很多配置，可以将配置写在tsconfig.json文件，这样运行时就可以不写参数。

### any类型

声明为any的话，会关闭类型检查。

没有声明类型的话，会进行自动推断，如果无法推断出类型就会认为是any。

有`noImplicitAny`编译选项，如果自动推断出any就会报错。



### unknown

这个类型相当于安全的any类型，凡是需要any类型的地方，通常都应该优先考虑设为`unknown`类型。





### never

空类型。不可赋值给它任何值，否则报错。



### 元组

比如数组有更强的约束，比如长度固定，类型固定。



### type命令

通过type命令来定义类型的别名。



### class

JavaScript 的类本质上是一个构造函数
