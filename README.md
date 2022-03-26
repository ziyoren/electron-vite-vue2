# electron-vite-vue2

一个简单、高效的桌面应用开发样板工程，由Electron、Vite、Vue2等组成。集成了vue devtools工具，方便大家调试。

## Quick Start
克隆本项目
```sh
git clone git@github.com:ziyoren/electron-vite-vue2.git
```

进入项目目录
```sh
cd electron-vite-vue2
```

安装依赖
```sh
npm install
```

开始开发
```sh 
npm start
```

打包发布
```sh
npm run release
```

## Directory
```sh
├── README.md              
├── build
│   └── icons
│       ├── 256x256.png
│       ├── icon.icns
│       └── icon.ico
├── electron
│   └── index.js              #electron的入口文件
├── electron-builder.json     #打包组件electron-builder的配置文件
├── favicon.svg
├── index.html                #Vue的入口模板文件
├── package.json
├── src                       #Vue的代码目录，就在这里写前端界面
│   ├── App.vue
│   ├── main.js
│   ├── router                #Vue的路由
│   │   └── index.js
│   └── views
│       ├── About.vue
│       └── Home.vue
├── vite.config.js            #Vite的配置文件
├── vue-devtools              #集成Vue-devtools6.1.3 方便您调试Vue项目
├── dist                      #编译Vue时生成的目录
└── release                   #打包发布的应用目录

```
