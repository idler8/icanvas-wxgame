# **iCanvas核心构造器**
![npm](https://img.shields.io/npm/dm/@icanvas/core-wxgame) ![NPM](https://img.shields.io/npm/l/@icanvas/core-wxgame) ![npm](https://img.shields.io/npm/v/@icanvas/core-wxgame) ![npm bundle size](https://img.shields.io/bundlephobia/min/@icanvas/core-wxgame)
## 安装
```bash
    npm install -s @icanvas/core-wxgame
```
## 调用
### umd/es6
es6调用完整支持Tree Shake
```javascript
    import * as ICanvas from '@icanvas/core';
    import * as ICanvasWxgame from '@icanvas/core-wxgame';
    // OR
    const ICanvas = require('@icanvas/core');
    const ICanvasWxgame = require('@icanvas/core-wxgame');
```

## API列表

### 资源加载包
#### [微信图片资源管理类](src/resources/lib/image.js#L25)`ICanvasWxgame.Resource.Image`
#### [微信音频资源管理类](src/resources/lib/audio.js#L70)`ICanvasWxgame.Resource.Audio`

### 特性包
#### [微信生成Canvas方法](src/apis/wxgame/canvas.js)`ICanvasWxgame.Api.Canvas`
#### [微信获取系统属性方法](src/apis/wxgame/system.js)`ICanvasWxgame.Api.System`
#### [微信网络请求类](src/apis/wxgame/request.js)`ICanvasWxgame.Api.Request`
#### [微信登陆工厂方法](src/apis/wxgame/login.js)`ICanvasWxgame.Api.Login`
#### [浏览器触摸监听传递](src/utils/index.js)`ICanvas.Util.Touch`

### 工具包
#### [微信触摸监听](src/utils/index.js)`ICanvas.Util.TouchListen`
#### [微信方法变种工厂](src/utils/index.js)`ICanvas.Util.Vary`
