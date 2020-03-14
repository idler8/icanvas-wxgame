import _defineProperty from '@babel/runtime/helpers/defineProperty';
import qs from 'qs';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';

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

var Audio =
/*#__PURE__*/
function () {
  function Audio(src) {
    var _this = this;

    _classCallCheck(this, Audio);

    this._source = wx.createInnerAudioContext();
    this._state = 0; //开始、载入中、载入完毕、已卸载

    this._currentTime = 0;
    this._loop = false;
    this._volume = 1;
    this._muted = false;
    this._paused = true;

    this._source.onCanplay(function () {
      if (_this._state !== 1) return;
      if (_this.oncanplay) _this.oncanplay();
      _this._state = 2;
      _this._source.loop = _this._loop;
      _this._source.volume = _this._muted ? 0 : _this._volume;
      if (_this._currentTime) _this._source.seek(_this._currentTime);
      if (!_this._paused) _this._source.play();
    });

    this._source.onEnded(function () {
      if (_this.onended) _this.onended();
      _this.paused = !_this.loop;
    });

    if (src) this.src = src;
  }

  _createClass(Audio, [{
    key: "play",
    value: function play() {
      this._paused = false;
      if (this._state == 2) this._source.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      this._paused = true;
      if (this._state == 2) this._source.pause();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._state == 3) return;
      this._state = 3;

      this._source.stop();

      this._source.destroy();
    }
  }, {
    key: "duration",
    get: function get() {
      if (this._state !== 2) return 0;
      return this._source.duration;
    }
  }, {
    key: "currentTime",
    get: function get() {
      if (this._state !== 2) return 0;
      return this._source.currentTime;
    },
    set: function set(currentTime) {
      this._currentTime = currentTime;
      if (this._state == 2) this._source.seek(currentTime);
    }
  }, {
    key: "loop",
    get: function get() {
      return this._loop;
    },
    set: function set(loop) {
      this._loop = loop;
      if (this._state == 2) this._source.loop = loop;
    }
  }, {
    key: "volume",
    get: function get() {
      return this._volume;
    },
    set: function set(volume) {
      this._volume = volume;
      if (this._state == 2) this._source.volume = volume;
    }
  }, {
    key: "muted",
    get: function get() {
      return this._muted;
    },
    set: function set(muted) {
      this._muted = muted;
      if (this._state == 2) this._source.volume = muted ? 0 : this._volume;
    }
  }, {
    key: "paused",
    get: function get() {
      return this._paused;
    },
    set: function set(paused) {
      paused ? this.pause() : this.play();
    }
  }, {
    key: "src",
    get: function get() {
      return this._source.src;
    },
    set: function set(src) {
      if (this._state !== 0) return;
      this._state = 1;
      this._source.src = src;
    }
  }]);

  return Audio;
}();

function polyfill() {
  if (GameGlobal.axios) return;

  if (!GameGlobal.document) {
    GameGlobal.document = {};

    GameGlobal.document.createElement = function (type) {
      if (type == 'canvas') return wx.createCanvas();
      if (type == 'image') return wx.createImage();
      if (type == 'audio') return new Audio();
    };
  }

  GameGlobal.document.mainCanvas = wx.createCanvas();

  GameGlobal.Image = function () {
    return wx.createImage();
  };

  GameGlobal.Audio = Audio;

  GameGlobal.addEventListener = function (type, callback) {
    if (type == 'touchstart') return wx.onTouchStart(callback);
    if (type == 'touchmove') return wx.onTouchMove(callback);
    if (type == 'touchend') return wx.onTouchEnd(callback);
    if (type == 'touchcancel') return wx.onTouchCancel(callback);
  };
  /**
   * 大致模拟axios
   */


  GameGlobal.axios = createInstance();
  /**
   * 将微信方法进行变种
   * @param {string} action 方法名
   * @param {Any} root 根元素/上下文
   * @param {Number} mode 变种方式 0:Promise返回success和fail,1:Promise返回执行结果,2:原样子调用
   */

  GameGlobal.vary = function (action) {
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
  };
}

export default polyfill;
