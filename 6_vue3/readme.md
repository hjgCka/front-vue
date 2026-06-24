### 创建vue3工程

使用如下命令：

```bash
npm create vue@latest
```

`npm create vue@latest` 底层等价于 `npx create-vue@latest`，属于**临时下载、临时运行**，不会写入全局依赖列表，执行完不会永久全局安装该包。

只会缓存在 npm 本地缓存目录，不会出现在你 `npm list -g` 的全局依赖里。



### 启动

运行上述命令之后，通过如下命令安装依赖并启动开发服务器：

```bash
$ npm install
$ npm run dev
```

