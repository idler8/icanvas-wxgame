import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import { Resource } from '@icanvas/core';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import qs from 'qs';

var WxgameImage =
/*#__PURE__*/
function (_Core$Resource$Loader) {
  _inherits(WxgameImage, _Core$Resource$Loader);

  function WxgameImage() {
    _classCallCheck(this, WxgameImage);

    return _possibleConstructorReturn(this, _getPrototypeOf(WxgameImage).apply(this, arguments));
  }

  _createClass(WxgameImage, [{
    key: "Set",
    value: function Set(url) {
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
  }, {
    key: "get",
    value: function get(key) {
      return this.resources[key] || ImageControl.Error || (ImageControl.Error = wx.createImage());
    }
  }]);

  return WxgameImage;
}(Resource.Loader);

var WxgameAudio =
/*#__PURE__*/
function (_Core$Resource$Loader) {
  _inherits(WxgameAudio, _Core$Resource$Loader);

  function WxgameAudio() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WxgameAudio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WxgameAudio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_mute", false);

    return _this;
  }

  _createClass(WxgameAudio, [{
    key: "get",
    //获取音频
    value: function get(key) {
      return this.resources[key] || WxgameAudio.Error || (WxgameAudio.Error = wx.createInnerAudioContext());
    } //静音

  }, {
    key: "Set",
    value: function Set(url) {
      return new Promise(function (resolve, reject) {
        //TODO audio 接口附加
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
    get: function get() {
      return this._mute;
    },
    set: function set(mute) {
      this._mute = mute;
      mute ? this.poolMute(true).channelMute(true) : this.channelContinue(true);
    } //设置音量

  }, {
    key: "volume",
    set: function set() {//TODO
    },
    get: function get() {
      return; //TODO
    }
  }]);

  return WxgameAudio;
}(Resource.Loader);



var index = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Image: WxgameImage,
	Audio: WxgameAudio
});

/**
 * 获得一个canvas对象
 *
 * @param {String} key 特殊模版标识
 *
 * 打包模式为wxgame时
 * key取share则获得主域内开放canvas
 * key取shared则获得开发域内开放canvas
 */
function Canvas(key) {
  if (!Canvas.main && key != 'main') Canvas('main');
  if (key && Canvas[key]) return Canvas[key];
  var canvas = null;

  if (key == 'share' && typeof wx.getOpenDataContext == 'function') {
    var context = wx.getOpenDataContext();

    context.canvas.getContext = function () {
      return context;
    };

    canvas = context.canvas;
  } else if (key == 'shared' && typeof wx.getSharedCanvas == 'function') {
    canvas = wx.getSharedCanvas();
  } else {
    canvas = wx.createCanvas();
  }

  return key ? Canvas[key] = canvas : canvas;
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

function TouchListen(Touch) {
  wx.onTouchStart(function (e) {
    return Touch.onTouchStart(e);
  });
  wx.onTouchMove(function (e) {
    return Touch.onTouchMove(e);
  });
  wx.onTouchEnd(function (e) {
    return Touch.onTouchEnd(e);
  });
  wx.onTouchCancel(function (e) {
    return Touch.onTouchEnd(e);
  });
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

var index$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Vary: Vary
});

function LoginFactory() {
  var defaultStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    left: 0,
    top: 0,
    width: 1000,
    height: 2000,
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#FFFFFF',
    borderWidth: 0,
    borderRadius: 0,
    textAlign: 'center',
    fontSize: 32,
    lineHeight: 32
  };

  //微信用户授权按钮监听
  var GetLoginButtonListen = function GetLoginButtonListen(UserInfoButton) {
    return new Promise(function (resolve, reject) {
      UserInfoButton.offTap();
      UserInfoButton.onTap(resolve);
    }).then(function (res) {
      if (!res.userInfo) return GetLoginButtonListen(UserInfoButton);
      if (Login.GetUserInfo.Abort) Login.GetUserInfo.Abort();
      return res.userInfo;
    });
  }; //微信用户授权按钮


  var GetLoginButton = function GetLoginButton(infoStyle) {
    var UserInfoButton = wx.createUserInfoButton({
      type: 'text',
      text: '',
      style: Object.assign(defaultStyle, infoStyle),
      withCredentials: false,
      lang: 'zh_CN'
    });
    UserInfoButton.show();
    return UserInfoButton;
  };

  var openSetting = Vary('openSetting');
  var authorize = Vary('authorize');
  var getUserInfo = Vary('getUserInfo');
  var login = Vary('login'); //打开权限设置界面

  var SetAuthorize = function SetAuthorize(scope) {
    return openSetting().then(function (res) {
      return res.authSetting[scope] ? Promise.resolve() : Promise.reject();
    })["catch"](function () {
      return SetAuthorize(scope);
    });
  }; //微信登陆


  var Login = function Login(info) {
    return login()["catch"](function (err) {
      wx.showToast({
        title: '登陆失败，请检查登陆状态',
        icon: 'none'
      });
      return Promise.reject(err);
    }).then(function (res) {
      if (!info) return res;
      return Login.GetUserInfo(info).then(function (user) {
        res.user = user;
        return res;
      });
    });
  }; //获取用户信息


  Login.GetUserInfo = function (info) {
    return authorize('scope.userInfo', 'scope')["catch"](function () {
      if (info === true) return SetAuthorize(scope);
      var Button = GetLoginButton(info);

      Login.GetUserInfo.Abort = function () {
        Button.hide();
        Button.destroy();
        delete Login.GetUserInfo.Abort;
      };

      return GetLoginButtonListen(Button);
    }).then(function () {
      return getUserInfo('zh_CN', 'lang');
    }).then(function (res) {
      return res.userInfo;
    });
  };

  return Login;
}

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



var index$2 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Canvas: Canvas,
	System: System,
	Touch: TouchListen,
	Login: LoginFactory,
	Request: createInstance
});

export { index$2 as Api, index as Resource, index$1 as Util };
