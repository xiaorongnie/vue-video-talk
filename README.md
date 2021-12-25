# vue-video-talk

## 使用

1. 项目根目录的`.npmrc`中添加如下内容, 让`@transcodegroup`下的包都从github中获取：

    ```config
    @transcodegroup:registry=https://npm.pkg.github.com
    @xiaorongnie:registry=https://npm.pkg.github.com
    ```

2. 用户文件根目录的`~/.npmrc`中添加如下内容, 其中`TOKEN`在[这里](https://github.com/settings/tokens/new)创建, 记得勾选`package`相关权限:

    ```config
    //npm.pkg.github.com/:_authToken=TOKEN
    ```

3. 安装/更新

    ```sh
    npm install @transcodegroup/vue-video-talk
    ```

## Project setup

```npm
npm install
```

### Compiles and hot-reloads for development

```npm
npm run serve
```

### Compiles and minifies for production

```npm
npm run build
```

### Lints and fixes files

```npm
npm run lint
```

### Publish

```npm
npm publish .
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
