import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import qs from 'qs';

/**
 * 获得一个canvas对象
 *
 * @param {String} key 特殊模版标识
 *
 * 打包模式为wxgame时
 * key取share则获得主域内开放canvas
 * key取shared则获得开发域内开放canvas
 */
function Canvas(width, height) {
  if (width == 'share' && typeof wx.getOpenDataContext == 'function') {
    var context = wx.getOpenDataContext();

    context.canvas.getContext = function () {
      return context;
    };

    return context.canvas;
  } else if (width == 'shared' && typeof wx.getSharedCanvas == 'function') {
    return wx.getSharedCanvas();
  } else if (width == 'main') {
    return Canvas.main || (Canvas.main = wx.createCanvas());
  }

  if (!Canvas.main) Canvas.main = wx.createCanvas();
  var canvas = wx.createCanvas();
  if (width > 0) canvas.width = width;
  if (height > 0) canvas.height = height;
  return canvas;
}

/**
 * 获取系统参数
 * pixel 屏幕与设备像素比
 * width 屏幕宽度
 * height 屏幕高度
 * ratio 宽高比
 */
function System() {
  System.wx = wx.getSystemInfoSync();
  System.pixel = System.wx.pixelRatio;
  System.width = System.wx.screenWidth;
  System.height = System.wx.screenHeight;
  System.ratio = System.width / System.height;
  return System;
}

function TouchListen() {
  return function (event) {
    wx.onTouchStart(function (e) {
      return event.start(e);
    });
    wx.onTouchMove(function (e) {
      return event.move(e);
    });
    wx.onTouchEnd(function (e) {
      return event.end(e);
    });
    wx.onTouchCancel(function (e) {
      return event.end(e);
    });
  };
}

var Image =
/*#__PURE__*/
function () {
  function Image() {
    _classCallCheck(this, Image);
  }

  _createClass(Image, [{
    key: "load",
    value: function load(url) {
      return new Promise(function (resolve, reject) {
        var image = wx.createImage();

        image.onload = function () {
          resolve(image);
        };

        image.onerror = function (e) {
          reject(e);
        };

        image.key = image.src = url;
      });
    }
  }]);

  return Image;
}();

var Audio =
/*#__PURE__*/
function () {
  function Audio() {
    _classCallCheck(this, Audio);
  }

  _createClass(Audio, [{
    key: "load",
    value: function load(url) {
      return new Promise(function (resolve, reject) {
        var audio = wx.createInnerAudioContext();
        audio.loop = false;
        audio.autoplay = false;
        audio.onCanplay(function () {
          resolve(audio);
        });
        audio.onError(function (e) {
          reject(e);
        });
        audio.src = url;
      });
    }
  }, {
    key: "mute",
    value: function mute(_mute) {
      return;
    }
  }, {
    key: "volume",
    value: function volume(v) {
      return;
    }
  }]);

  return Audio;
}();

var qsConfig = {
  arrayFormat: 'indices',
  encodeValuesOnly: true
};

function mergeDefaultConfig() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getMethods = arguments.length > 1 ? arguments[1] : undefined;
  var postMethods = arguments.length > 2 ? arguments[2] : undefined;
  var method = config.method || 'get';
  var baseURL = config.baseURL || '';
  var configHeaders = config.headers || {};
  var headers = {
    common: Object.assign({}, configHeaders.common)
  };
  getMethods.forEach(function (method) {
    headers[method] = Object.assign({}, configHeaders[method]);
  });
  postMethods.forEach(function (method) {
    headers[method] = Object.assign({}, configHeaders[method]);
  });
  var params = config.params ? JSON.parse(JSON.stringify(config.params)) : {};
  var data = config.data ? JSON.parse(JSON.stringify(config.data)) : {};
  return {
    method: method,
    baseURL: baseURL,
    headers: headers,
    params: params,
    data: data
  };
}

function request(defaultConfig) {
  var urlOrConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var getConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var interceptors = arguments.length > 3 ? arguments[3] : undefined;
  var method = getConfig.method || urlOrConfig.method || defaultConfig.method;
  var header = Object.assign({}, defaultConfig.headers.common, defaultConfig.headers[method], urlOrConfig.header, getConfig.header);
  var url = (getConfig.baseURL || urlOrConfig.baseURL || defaultConfig.baseURL || '') + (getConfig.url || urlOrConfig.url || defaultConfig.url);
  var params = Object.assign({}, defaultConfig.params, urlOrConfig.params, getConfig.params);
  var data = Object.assign({}, defaultConfig.data, urlOrConfig.data, getConfig.data);
  var dataType = getConfig.dataType || urlOrConfig.dataType || defaultConfig.dataType || 'json';
  var responseType = getConfig.responseType || urlOrConfig.responseType || defaultConfig.responseType || 'text';

  if (method == 'get') {
    params = Object.assign(data, params);
    data = null;
  }

  var promiseConfig = Promise.resolve({
    method: method,
    url: url + '?' + qs.stringify(params, qsConfig),
    data: data,
    header: header,
    dataType: dataType,
    responseType: responseType
  });
  var transformRequest = getConfig.transformRequest || urlOrConfig.transformRequest || interceptors.request.transform;

  if (transformRequest) {
    promiseConfig = transformRequest.reduce(function (promise, fn) {
      if (!fn) return promise;
      if (typeof fn == 'function') return promise.then(function (res) {
        return fn(res) || res;
      });
      if (fn.resolve) promise = promise.then(function (res) {
        return fn.resolve(res) || res;
      });
      if (fn.reject) promise = promise["catch"](function (res) {
        return fn.reject(res) || res;
      });
      return promise;
    }, promiseConfig);
  }

  var promiseRequest = promiseConfig.then(function (Config) {
    return new Promise(function (resolve, reject) {
      Config.success = function (res) {
        Config.response = res;
        resolve(Config);
      };

      Config.fail = function (res) {
        Config.error = res;
        reject(Config);
      };

      wx.request(Config);
    });
  });
  var transformResponse = getConfig.transformResponse || urlOrConfig.transformResponse || interceptors.response.transform;

  if (transformResponse) {
    promiseRequest = transformResponse.reduce(function (promise, fn) {
      if (!fn) return promise;
      if (typeof fn == 'function') return promise.then(function (res) {
        return fn(res) || res;
      });
      if (fn.resolve) promise = promise.then(function (res) {
        return fn.resolve(res) || res;
      });
      if (fn.reject) promise = promise["catch"](function (res) {
        return fn.reject(res) || res;
      });
      return promise;
    }, promiseRequest);
  }

  return promiseRequest;
}

function createInterceptors(resolve, reject) {
  this.transform.push(reject ? {
    resolve: resolve,
    reject: reject
  } : resolve);
  return this;
}

function createInstance(defaultConfig) {
  var getMethods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['get'];
  var postMethods = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['post'];

  var axios = function axios(urlOrConfig, getConfig) {
    if (typeof urlOrConfig == 'string') {
      urlOrConfig = {
        url: urlOrConfig,
        method: 'get'
      };
    }

    return request(axios.defaults, urlOrConfig, getConfig, axios.interceptors);
  };

  axios.defaults = mergeDefaultConfig(defaultConfig, getMethods, postMethods);
  axios.interceptors = {
    request: {
      transform: [],
      use: createInterceptors
    },
    response: {
      transform: [],
      use: createInterceptors
    }
  };
  axios.create = createInstance;
  axios.request = axios;
  getMethods.forEach(function (method) {
    axios[method] = function (url, params, config) {
      return axios({
        url: url,
        method: method,
        params: params
      }, config);
    };
  });
  postMethods.forEach(function (method) {
    axios[method] = function (url, data, config) {
      return axios({
        url: url,
        method: method,
        data: data
      }, config);
    };
  });
  return axios;
}

/**
 * 将微信方法进行变种
 * @param {string} action 方法名
 * @param {Any} root 根元素/上下文
 * @param {Number} mode 变种方式 0:Promise返回success和fail,1:Promise返回执行结果,2:原样子调用
 */

function Vary(action) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : wx;
  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (mode == 2) {
    return root[action];
  } else if (mode == 1) {
    return function (args, key) {
      return new Promise(function (resolve) {
        return resolve(root[action](key ? _defineProperty({}, key, args) : args));
      });
    };
  } else if (mode == 0) {
    return function (args, key) {
      return new Promise(function (success, fail) {
        return root[action](Object.assign({
          success: success,
          fail: fail
        }, key ? _defineProperty({}, key, args) : args));
      });
    };
  }
}

export { Audio, Canvas, Image, createInstance as Request, System, TouchListen as Touch, Vary };
