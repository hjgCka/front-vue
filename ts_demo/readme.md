### 编译ts文件

为了编译ts文件，需要用npm安装typescript依赖。

这里使用的是非全局安装，这个依赖提供了执行命令：tsc，所以需要使用npx来执行。

例如：

```shell
npx tsc -v
npx tsc xxx.ts
```



其它仅仅用于代码引入的普通模块，比如（axios）就不需要这样执行。



package.json的script部分，不需要用npx。因为npm会自动将**node_modules/.bin**目录加入脚本的执行环境PATH。



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
