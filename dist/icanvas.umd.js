(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.ICanvasWxgame = {}));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  var isNativeFunction = _isNativeFunction;

  var construct = createCommonjsModule(function (module) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      module.exports = _construct = Reflect.construct;
    } else {
      module.exports = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  module.exports = _construct;
  });

  var wrapNativeSuper = createCommonjsModule(function (module) {
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  module.exports = _wrapNativeSuper;
  });

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  var superPropBase = _superPropBase;

  var get = createCommonjsModule(function (module) {
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      module.exports = _get = Reflect.get;
    } else {
      module.exports = _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  module.exports = _get;
  });

  var eventemitter3 = createCommonjsModule(function (module) {

  var has = Object.prototype.hasOwnProperty
    , prefix = '~';

  /**
   * Constructor to create a storage for our `EE` objects.
   * An `Events` instance is a plain object whose properties are event names.
   *
   * @constructor
   * @private
   */
  function Events() {}

  //
  // We try to not inherit from `Object.prototype`. In some engines creating an
  // instance in this way is faster than calling `Object.create(null)` directly.
  // If `Object.create(null)` is not supported we prefix the event names with a
  // character to make sure that the built-in object properties are not
  // overridden or used as an attack vector.
  //
  if (Object.create) {
    Events.prototype = Object.create(null);

    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
  }

  /**
   * Representation of a single event listener.
   *
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
   * @constructor
   * @private
   */
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }

  /**
   * Add a listener for a given event.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} once Specify if the listener is a one-time listener.
   * @returns {EventEmitter}
   * @private
   */
  function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') {
      throw new TypeError('The listener must be a function');
    }

    var listener = new EE(fn, context || emitter, once)
      , evt = prefix ? prefix + event : event;

    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [emitter._events[evt], listener];

    return emitter;
  }

  /**
   * Clear event by name.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} evt The Event name.
   * @private
   */
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
  }

  /**
   * Minimal `EventEmitter` interface that is molded against the Node.js
   * `EventEmitter` interface.
   *
   * @constructor
   * @public
   */
  function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
  }

  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   *
   * @returns {Array}
   * @public
   */
  EventEmitter.prototype.eventNames = function eventNames() {
    var names = []
      , events
      , name;

    if (this._eventsCount === 0) return names;

    for (name in (events = this._events)) {
      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }

    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }

    return names;
  };

  /**
   * Return the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Array} The registered listeners.
   * @public
   */
  EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event
      , handlers = this._events[evt];

    if (!handlers) return [];
    if (handlers.fn) return [handlers.fn];

    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
      ee[i] = handlers[i].fn;
    }

    return ee;
  };

  /**
   * Return the number of listeners listening to a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Number} The number of listeners.
   * @public
   */
  EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event
      , listeners = this._events[evt];

    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
  };

  /**
   * Calls each of the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Boolean} `true` if the event had listeners, else `false`.
   * @public
   */
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;

    if (!this._events[evt]) return false;

    var listeners = this._events[evt]
      , len = arguments.length
      , args
      , i;

    if (listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

      switch (len) {
        case 1: return listeners.fn.call(listeners.context), true;
        case 2: return listeners.fn.call(listeners.context, a1), true;
        case 3: return listeners.fn.call(listeners.context, a1, a2), true;
        case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }

      for (i = 1, args = new Array(len -1); i < len; i++) {
        args[i - 1] = arguments[i];
      }

      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length
        , j;

      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

        switch (len) {
          case 1: listeners[i].fn.call(listeners[i].context); break;
          case 2: listeners[i].fn.call(listeners[i].context, a1); break;
          case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
          case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
          default:
            if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
              args[j - 1] = arguments[j];
            }

            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }

    return true;
  };

  /**
   * Add a listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };

  /**
   * Add a one-time listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };

  /**
   * Remove the listeners of a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn Only remove the listeners that match this function.
   * @param {*} context Only remove the listeners that have this context.
   * @param {Boolean} once Only remove one-time listeners.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;

    if (!this._events[evt]) return this;
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }

    var listeners = this._events[evt];

    if (listeners.fn) {
      if (
        listeners.fn === fn &&
        (!once || listeners.once) &&
        (!context || listeners.context === context)
      ) {
        clearEvent(this, evt);
      }
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
        if (
          listeners[i].fn !== fn ||
          (once && !listeners[i].once) ||
          (context && listeners[i].context !== context)
        ) {
          events.push(listeners[i]);
        }
      }

      //
      // Reset the array, or remove it completely if we have no more listeners.
      //
      if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
      else clearEvent(this, evt);
    }

    return this;
  };

  /**
   * Remove all listeners, or those of the specified event.
   *
   * @param {(String|Symbol)} [event] The event name.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;

    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt]) clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }

    return this;
  };

  //
  // Alias methods names because people roll like that.
  //
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  //
  // Expose the prefix.
  //
  EventEmitter.prefixed = prefix;

  //
  // Allow `EventEmitter` to be imported as module namespace.
  //
  EventEmitter.EventEmitter = EventEmitter;

  //
  // Expose the module.
  //
  {
    module.exports = EventEmitter;
  }
  });

  var howler = createCommonjsModule(function (module, exports) {
  /*!
   *  howler.js v2.1.2
   *  howlerjs.com
   *
   *  (c) 2013-2019, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   */

  (function() {

    /** Global Methods **/
    /***************************************************************************/

    /**
     * Create the global controller. All contained methods and properties apply
     * to all sounds that are currently playing or will be in the future.
     */
    var HowlerGlobal = function() {
      this.init();
    };
    HowlerGlobal.prototype = {
      /**
       * Initialize the global Howler object.
       * @return {Howler}
       */
      init: function() {
        var self = this || Howler;

        // Create a global ID counter.
        self._counter = 1000;

        // Pool of unlocked HTML5 Audio objects.
        self._html5AudioPool = [];
        self.html5PoolSize = 10;

        // Internal properties.
        self._codecs = {};
        self._howls = [];
        self._muted = false;
        self._volume = 1;
        self._canPlayEvent = 'canplaythrough';
        self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

        // Public properties.
        self.masterGain = null;
        self.noAudio = false;
        self.usingWebAudio = true;
        self.autoSuspend = true;
        self.ctx = null;

        // Set to false to disable the auto audio unlocker.
        self.autoUnlock = true;

        // Setup the various state values for global tracking.
        self._setup();

        return self;
      },

      /**
       * Get/set the global volume for all sounds.
       * @param  {Float} vol Volume from 0.0 to 1.0.
       * @return {Howler/Float}     Returns self or current volume.
       */
      volume: function(vol) {
        var self = this || Howler;
        vol = parseFloat(vol);

        // If we don't have an AudioContext created yet, run the setup.
        if (!self.ctx) {
          setupAudioContext();
        }

        if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
          self._volume = vol;

          // Don't update any of the nodes if we are muted.
          if (self._muted) {
            return self;
          }

          // When using Web Audio, we just need to adjust the master gain.
          if (self.usingWebAudio) {
            self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          }

          // Loop through and change volume for all HTML5 audio nodes.
          for (var i=0; i<self._howls.length; i++) {
            if (!self._howls[i]._webAudio) {
              // Get all of the sounds in this Howl group.
              var ids = self._howls[i]._getSoundIds();

              // Loop through all sounds and change the volumes.
              for (var j=0; j<ids.length; j++) {
                var sound = self._howls[i]._soundById(ids[j]);

                if (sound && sound._node) {
                  sound._node.volume = sound._volume * vol;
                }
              }
            }
          }

          return self;
        }

        return self._volume;
      },

      /**
       * Handle muting and unmuting globally.
       * @param  {Boolean} muted Is muted or not.
       */
      mute: function(muted) {
        var self = this || Howler;

        // If we don't have an AudioContext created yet, run the setup.
        if (!self.ctx) {
          setupAudioContext();
        }

        self._muted = muted;

        // With Web Audio, we just need to mute the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
        }

        // Loop through and mute all HTML5 Audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and mark the audio node as muted.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.muted = (muted) ? true : sound._muted;
              }
            }
          }
        }

        return self;
      },

      /**
       * Unload and destroy all currently loaded Howl objects.
       * @return {Howler}
       */
      unload: function() {
        var self = this || Howler;

        for (var i=self._howls.length-1; i>=0; i--) {
          self._howls[i].unload();
        }

        // Create a new AudioContext to make sure it is fully reset.
        if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
          self.ctx.close();
          self.ctx = null;
          setupAudioContext();
        }

        return self;
      },

      /**
       * Check for codec support of specific extension.
       * @param  {String} ext Audio file extention.
       * @return {Boolean}
       */
      codecs: function(ext) {
        return (this || Howler)._codecs[ext.replace(/^x-/, '')];
      },

      /**
       * Setup various state values for global tracking.
       * @return {Howler}
       */
      _setup: function() {
        var self = this || Howler;

        // Keeps track of the suspend/resume state of the AudioContext.
        self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';

        // Automatically begin the 30-second suspend process
        self._autoSuspend();

        // Check if audio is available.
        if (!self.usingWebAudio) {
          // No audio is available on this system if noAudio is set to true.
          if (typeof Audio !== 'undefined') {
            try {
              var test = new Audio();

              // Check if the canplaythrough event is available.
              if (typeof test.oncanplaythrough === 'undefined') {
                self._canPlayEvent = 'canplay';
              }
            } catch(e) {
              self.noAudio = true;
            }
          } else {
            self.noAudio = true;
          }
        }

        // Test to make sure audio isn't disabled in Internet Explorer.
        try {
          var test = new Audio();
          if (test.muted) {
            self.noAudio = true;
          }
        } catch (e) {}

        // Check for supported codecs.
        if (!self.noAudio) {
          self._setupCodecs();
        }

        return self;
      },

      /**
       * Check for browser support for various codecs and cache the results.
       * @return {Howler}
       */
      _setupCodecs: function() {
        var self = this || Howler;
        var audioTest = null;

        // Must wrap in a try/catch because IE11 in server mode throws an error.
        try {
          audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
        } catch (err) {
          return self;
        }

        if (!audioTest || typeof audioTest.canPlayType !== 'function') {
          return self;
        }

        var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

        // Opera version <33 has mixed MP3 support, so we need to check for and block it.
        var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
        var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

        self._codecs = {
          mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
          mpeg: !!mpegTest,
          opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
          ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
          oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
          wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
          aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
          caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
          m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
          mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
          weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
          webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
          dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
          flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
        };

        return self;
      },

      /**
       * Some browsers/devices will only allow audio to be played after a user interaction.
       * Attempt to automatically unlock audio on the first user interaction.
       * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
       * @return {Howler}
       */
      _unlockAudio: function() {
        var self = this || Howler;

        // Only run this if Web Audio is supported and it hasn't already been unlocked.
        if (self._audioUnlocked || !self.ctx) {
          return;
        }

        self._audioUnlocked = false;
        self.autoUnlock = false;

        // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
        // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
        // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
        if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
          self._mobileUnloaded = true;
          self.unload();
        }

        // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
        // http://stackoverflow.com/questions/24119684
        self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

        // Call this method on touch start to create and play a buffer,
        // then check if the audio actually played to determine if
        // audio has now been unlocked on iOS, Android, etc.
        var unlock = function(e) {
          // Create a pool of unlocked HTML5 Audio objects that can
          // be used for playing sounds without user interaction. HTML5
          // Audio objects must be individually unlocked, as opposed
          // to the WebAudio API which only needs a single activation.
          // This must occur before WebAudio setup or the source.onended
          // event will not fire.
          for (var i=0; i<self.html5PoolSize; i++) {
            try {
              var audioNode = new Audio();

              // Mark this Audio object as unlocked to ensure it can get returned
              // to the unlocked pool when released.
              audioNode._unlocked = true;

              // Add the audio node to the pool.
              self._releaseHtml5Audio(audioNode);
            } catch (e) {
              self.noAudio = true;
            }
          }

          // Loop through any assigned audio nodes and unlock them.
          for (var i=0; i<self._howls.length; i++) {
            if (!self._howls[i]._webAudio) {
              // Get all of the sounds in this Howl group.
              var ids = self._howls[i]._getSoundIds();

              // Loop through all sounds and unlock the audio nodes.
              for (var j=0; j<ids.length; j++) {
                var sound = self._howls[i]._soundById(ids[j]);

                if (sound && sound._node && !sound._node._unlocked) {
                  sound._node._unlocked = true;
                  sound._node.load();
                }
              }
            }
          }

          // Fix Android can not play in suspend state.
          self._autoResume();

          // Create an empty buffer.
          var source = self.ctx.createBufferSource();
          source.buffer = self._scratchBuffer;
          source.connect(self.ctx.destination);

          // Play the empty buffer.
          if (typeof source.start === 'undefined') {
            source.noteOn(0);
          } else {
            source.start(0);
          }

          // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
          if (typeof self.ctx.resume === 'function') {
            self.ctx.resume();
          }

          // Setup a timeout to check that we are unlocked on the next event loop.
          source.onended = function() {
            source.disconnect(0);

            // Update the unlocked state and prevent this check from happening again.
            self._audioUnlocked = true;

            // Remove the touch start listener.
            document.removeEventListener('touchstart', unlock, true);
            document.removeEventListener('touchend', unlock, true);
            document.removeEventListener('click', unlock, true);

            // Let all sounds know that audio has been unlocked.
            for (var i=0; i<self._howls.length; i++) {
              self._howls[i]._emit('unlock');
            }
          };
        };

        // Setup a touch start listener to attempt an unlock in.
        document.addEventListener('touchstart', unlock, true);
        document.addEventListener('touchend', unlock, true);
        document.addEventListener('click', unlock, true);

        return self;
      },

      /**
       * Get an unlocked HTML5 Audio object from the pool. If none are left,
       * return a new Audio object and throw a warning.
       * @return {Audio} HTML5 Audio object.
       */
      _obtainHtml5Audio: function() {
        var self = this || Howler;

        // Return the next object from the pool if one exists.
        if (self._html5AudioPool.length) {
          return self._html5AudioPool.pop();
        }

        //.Check if the audio is locked and throw a warning.
        var testPlay = new Audio().play();
        if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
          testPlay.catch(function() {
            console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
          });
        }

        return new Audio();
      },

      /**
       * Return an activated HTML5 Audio object to the pool.
       * @return {Howler}
       */
      _releaseHtml5Audio: function(audio) {
        var self = this || Howler;

        // Don't add audio to the pool if we don't know if it has been unlocked.
        if (audio._unlocked) {
          self._html5AudioPool.push(audio);
        }

        return self;
      },

      /**
       * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
       * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
       * @return {Howler}
       */
      _autoSuspend: function() {
        var self = this;

        if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
          return;
        }

        // Check if any sounds are playing.
        for (var i=0; i<self._howls.length; i++) {
          if (self._howls[i]._webAudio) {
            for (var j=0; j<self._howls[i]._sounds.length; j++) {
              if (!self._howls[i]._sounds[j]._paused) {
                return self;
              }
            }
          }
        }

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
        }

        // If no sound has played after 30 seconds, suspend the context.
        self._suspendTimer = setTimeout(function() {
          if (!self.autoSuspend) {
            return;
          }

          self._suspendTimer = null;
          self.state = 'suspending';
          self.ctx.suspend().then(function() {
            self.state = 'suspended';

            if (self._resumeAfterSuspend) {
              delete self._resumeAfterSuspend;
              self._autoResume();
            }
          });
        }, 30000);

        return self;
      },

      /**
       * Automatically resume the Web Audio AudioContext when a new sound is played.
       * @return {Howler}
       */
      _autoResume: function() {
        var self = this;

        if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
          return;
        }

        if (self.state === 'running' && self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        } else if (self.state === 'suspended') {
          self.ctx.resume().then(function() {
            self.state = 'running';

            // Emit to all Howls that the audio has resumed.
            for (var i=0; i<self._howls.length; i++) {
              self._howls[i]._emit('resume');
            }
          });

          if (self._suspendTimer) {
            clearTimeout(self._suspendTimer);
            self._suspendTimer = null;
          }
        } else if (self.state === 'suspending') {
          self._resumeAfterSuspend = true;
        }

        return self;
      }
    };

    // Setup the global audio controller.
    var Howler = new HowlerGlobal();

    /** Group Methods **/
    /***************************************************************************/

    /**
     * Create an audio group controller.
     * @param {Object} o Passed in properties for this group.
     */
    var Howl = function(o) {
      var self = this;

      // Throw an error if no source is provided.
      if (!o.src || o.src.length === 0) {
        console.error('An array of source files must be passed with any new Howl.');
        return;
      }

      self.init(o);
    };
    Howl.prototype = {
      /**
       * Initialize a new Howl group object.
       * @param  {Object} o Passed in properties for this group.
       * @return {Howl}
       */
      init: function(o) {
        var self = this;

        // If we don't have an AudioContext created yet, run the setup.
        if (!Howler.ctx) {
          setupAudioContext();
        }

        // Setup user-defined default properties.
        self._autoplay = o.autoplay || false;
        self._format = (typeof o.format !== 'string') ? o.format : [o.format];
        self._html5 = o.html5 || false;
        self._muted = o.mute || false;
        self._loop = o.loop || false;
        self._pool = o.pool || 5;
        self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
        self._rate = o.rate || 1;
        self._sprite = o.sprite || {};
        self._src = (typeof o.src !== 'string') ? o.src : [o.src];
        self._volume = o.volume !== undefined ? o.volume : 1;
        self._xhrWithCredentials = o.xhrWithCredentials || false;

        // Setup all other default properties.
        self._duration = 0;
        self._state = 'unloaded';
        self._sounds = [];
        self._endTimers = {};
        self._queue = [];
        self._playLock = false;

        // Setup event listeners.
        self._onend = o.onend ? [{fn: o.onend}] : [];
        self._onfade = o.onfade ? [{fn: o.onfade}] : [];
        self._onload = o.onload ? [{fn: o.onload}] : [];
        self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
        self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
        self._onpause = o.onpause ? [{fn: o.onpause}] : [];
        self._onplay = o.onplay ? [{fn: o.onplay}] : [];
        self._onstop = o.onstop ? [{fn: o.onstop}] : [];
        self._onmute = o.onmute ? [{fn: o.onmute}] : [];
        self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
        self._onrate = o.onrate ? [{fn: o.onrate}] : [];
        self._onseek = o.onseek ? [{fn: o.onseek}] : [];
        self._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
        self._onresume = [];

        // Web Audio or HTML5 Audio?
        self._webAudio = Howler.usingWebAudio && !self._html5;

        // Automatically try to enable audio.
        if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
          Howler._unlockAudio();
        }

        // Keep track of this Howl group in the global controller.
        Howler._howls.push(self);

        // If they selected autoplay, add a play event to the load queue.
        if (self._autoplay) {
          self._queue.push({
            event: 'play',
            action: function() {
              self.play();
            }
          });
        }

        // Load the source file unless otherwise specified.
        if (self._preload) {
          self.load();
        }

        return self;
      },

      /**
       * Load the audio file.
       * @return {Howler}
       */
      load: function() {
        var self = this;
        var url = null;

        // If no audio is available, quit immediately.
        if (Howler.noAudio) {
          self._emit('loaderror', null, 'No audio support.');
          return;
        }

        // Make sure our source is in an array.
        if (typeof self._src === 'string') {
          self._src = [self._src];
        }

        // Loop through the sources and pick the first one that is compatible.
        for (var i=0; i<self._src.length; i++) {
          var ext, str;

          if (self._format && self._format[i]) {
            // If an extension was specified, use that instead.
            ext = self._format[i];
          } else {
            // Make sure the source is a string.
            str = self._src[i];
            if (typeof str !== 'string') {
              self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
              continue;
            }

            // Extract the file extension from the URL or base64 data URI.
            ext = /^data:audio\/([^;,]+);/i.exec(str);
            if (!ext) {
              ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
            }

            if (ext) {
              ext = ext[1].toLowerCase();
            }
          }

          // Log a warning if no extension was found.
          if (!ext) {
            console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
          }

          // Check if this extension is available.
          if (ext && Howler.codecs(ext)) {
            url = self._src[i];
            break;
          }
        }

        if (!url) {
          self._emit('loaderror', null, 'No codec support for selected audio sources.');
          return;
        }

        self._src = url;
        self._state = 'loading';

        // If the hosting page is HTTPS and the source isn't,
        // drop down to HTML5 Audio to avoid Mixed Content errors.
        if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
          self._html5 = true;
          self._webAudio = false;
        }

        // Create a new sound object and add it to the pool.
        new Sound(self);

        // Load and decode the audio data for playback.
        if (self._webAudio) {
          loadBuffer(self);
        }

        return self;
      },

      /**
       * Play a sound or resume previous playback.
       * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
       * @param  {Boolean} internal Internal Use: true prevents event firing.
       * @return {Number}          Sound ID.
       */
      play: function(sprite, internal) {
        var self = this;
        var id = null;

        // Determine if a sprite, sound id or nothing was passed
        if (typeof sprite === 'number') {
          id = sprite;
          sprite = null;
        } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
          // If the passed sprite doesn't exist, do nothing.
          return null;
        } else if (typeof sprite === 'undefined') {
          // Use the default sound sprite (plays the full audio length).
          sprite = '__default';

          // Check if there is a single paused sound that isn't ended. 
          // If there is, play that sound. If not, continue as usual.  
          if (!self._playLock) {
            var num = 0;
            for (var i=0; i<self._sounds.length; i++) {
              if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                num++;
                id = self._sounds[i]._id;
              }
            }

            if (num === 1) {
              sprite = null;
            } else {
              id = null;
            }
          }
        }

        // Get the selected node, or get one from the pool.
        var sound = id ? self._soundById(id) : self._inactiveSound();

        // If the sound doesn't exist, do nothing.
        if (!sound) {
          return null;
        }

        // Select the sprite definition.
        if (id && !sprite) {
          sprite = sound._sprite || '__default';
        }

        // If the sound hasn't loaded, we must wait to get the audio's duration.
        // We also need to wait to make sure we don't run into race conditions with
        // the order of function calls.
        if (self._state !== 'loaded') {
          // Set the sprite value on this sound.
          sound._sprite = sprite;

          // Mark this sound as not ended in case another sound is played before this one loads.
          sound._ended = false;

          // Add the sound to the queue to be played on load.
          var soundId = sound._id;
          self._queue.push({
            event: 'play',
            action: function() {
              self.play(soundId);
            }
          });

          return soundId;
        }

        // Don't play the sound if an id was passed and it is already playing.
        if (id && !sound._paused) {
          // Trigger the play event, in order to keep iterating through queue.
          if (!internal) {
            self._loadQueue('play');
          }

          return sound._id;
        }

        // Make sure the AudioContext isn't suspended, and resume it if it is.
        if (self._webAudio) {
          Howler._autoResume();
        }

        // Determine how long to play for and where to start playing.
        var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
        var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
        var timeout = (duration * 1000) / Math.abs(sound._rate);
        var start = self._sprite[sprite][0] / 1000;
        var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
        var loop = !!(sound._loop || self._sprite[sprite][2]);
        sound._sprite = sprite;

        // Mark the sound as ended instantly so that this async playback
        // doesn't get grabbed by another call to play while this one waits to start.
        sound._ended = false;

        // Update the parameters of the sound.
        var setParams = function() {
          sound._paused = false;
          sound._seek = seek;
          sound._start = start;
          sound._stop = stop;
          sound._loop = loop;
        };

        // End the sound instantly if seek is at the end.
        if (seek >= stop) {
          self._ended(sound);
          return;
        }

        // Begin the actual playback.
        var node = sound._node;
        if (self._webAudio) {
          // Fire this when the sound is ready to play to begin Web Audio playback.
          var playWebAudio = function() {
            self._playLock = false;
            setParams();
            self._refreshBuffer(sound);

            // Setup the playback params.
            var vol = (sound._muted || self._muted) ? 0 : sound._volume;
            node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            sound._playStart = Howler.ctx.currentTime;

            // Play the sound using the supported method.
            if (typeof node.bufferSource.start === 'undefined') {
              sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
            } else {
              sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
            }

            // Start a new timer if none is present.
            if (timeout !== Infinity) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            if (!internal) {
              setTimeout(function() {
                self._emit('play', sound._id);
                self._loadQueue();
              }, 0);
            }
          };

          if (Howler.state === 'running') {
            playWebAudio();
          } else {
            self._playLock = true;

            // Wait for the audio context to resume before playing.
            self.once('resume', playWebAudio);

            // Cancel the end timer.
            self._clearTimer(sound._id);
          }
        } else {
          // Fire this when the sound is ready to play to begin HTML5 Audio playback.
          var playHtml5 = function() {
            node.currentTime = seek;
            node.muted = sound._muted || self._muted || Howler._muted || node.muted;
            node.volume = sound._volume * Howler.volume();
            node.playbackRate = sound._rate;

            // Some browsers will throw an error if this is called without user interaction.
            try {
              var play = node.play();

              // Support older browsers that don't support promises, and thus don't have this issue.
              if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
                // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
                self._playLock = true;

                // Set param values immediately.
                setParams();

                // Releases the lock and executes queued actions.
                play
                  .then(function() {
                    self._playLock = false;
                    node._unlocked = true;
                    if (!internal) {
                      self._emit('play', sound._id);
                      self._loadQueue();
                    }
                  })
                  .catch(function() {
                    self._playLock = false;
                    self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                      'on mobile devices and Chrome where playback was not within a user interaction.');

                    // Reset the ended and paused values.
                    sound._ended = true;
                    sound._paused = true;
                  });
              } else if (!internal) {
                self._playLock = false;
                setParams();
                self._emit('play', sound._id);
                self._loadQueue();
              }

              // Setting rate before playing won't work in IE, so we set it again here.
              node.playbackRate = sound._rate;

              // If the node is still paused, then we can assume there was a playback issue.
              if (node.paused) {
                self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                  'on mobile devices and Chrome where playback was not within a user interaction.');
                return;
              }

              // Setup the end timer on sprites or listen for the ended event.
              if (sprite !== '__default' || sound._loop) {
                self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
              } else {
                self._endTimers[sound._id] = function() {
                  // Fire ended on this audio node.
                  self._ended(sound);

                  // Clear this listener.
                  node.removeEventListener('ended', self._endTimers[sound._id], false);
                };
                node.addEventListener('ended', self._endTimers[sound._id], false);
              }
            } catch (err) {
              self._emit('playerror', sound._id, err);
            }
          };

          // If this is streaming audio, make sure the src is set and load again.
          if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
            node.src = self._src;
            node.load();
          }

          // Play immediately if ready, or wait for the 'canplaythrough'e vent.
          var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
          if (node.readyState >= 3 || loadedNoReadyState) {
            playHtml5();
          } else {
            self._playLock = true;

            var listener = function() {
              // Begin playback.
              playHtml5();

              // Clear this listener.
              node.removeEventListener(Howler._canPlayEvent, listener, false);
            };
            node.addEventListener(Howler._canPlayEvent, listener, false);

            // Cancel the end timer.
            self._clearTimer(sound._id);
          }
        }

        return sound._id;
      },

      /**
       * Pause playback and save current position.
       * @param  {Number} id The sound ID (empty to pause all in group).
       * @return {Howl}
       */
      pause: function(id) {
        var self = this;

        // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'pause',
            action: function() {
              self.pause(id);
            }
          });

          return self;
        }

        // If no id is passed, get all ID's to be paused.
        var ids = self._getSoundIds(id);

        for (var i=0; i<ids.length; i++) {
          // Clear the end timer.
          self._clearTimer(ids[i]);

          // Get the sound.
          var sound = self._soundById(ids[i]);

          if (sound && !sound._paused) {
            // Reset the seek position.
            sound._seek = self.seek(ids[i]);
            sound._rateSeek = 0;
            sound._paused = true;

            // Stop currently running fades.
            self._stopFade(ids[i]);

            if (sound._node) {
              if (self._webAudio) {
                // Make sure the sound has been created.
                if (!sound._node.bufferSource) {
                  continue;
                }

                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                sound._node.pause();
              }
            }
          }

          // Fire the pause event, unless `true` is passed as the 2nd argument.
          if (!arguments[1]) {
            self._emit('pause', sound ? sound._id : null);
          }
        }

        return self;
      },

      /**
       * Stop playback and reset to start.
       * @param  {Number} id The sound ID (empty to stop all in group).
       * @param  {Boolean} internal Internal Use: true prevents event firing.
       * @return {Howl}
       */
      stop: function(id, internal) {
        var self = this;

        // If the sound hasn't loaded, add it to the load queue to stop when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'stop',
            action: function() {
              self.stop(id);
            }
          });

          return self;
        }

        // If no id is passed, get all ID's to be stopped.
        var ids = self._getSoundIds(id);

        for (var i=0; i<ids.length; i++) {
          // Clear the end timer.
          self._clearTimer(ids[i]);

          // Get the sound.
          var sound = self._soundById(ids[i]);

          if (sound) {
            // Reset the seek position.
            sound._seek = sound._start || 0;
            sound._rateSeek = 0;
            sound._paused = true;
            sound._ended = true;

            // Stop currently running fades.
            self._stopFade(ids[i]);

            if (sound._node) {
              if (self._webAudio) {
                // Make sure the sound's AudioBufferSourceNode has been created.
                if (sound._node.bufferSource) {
                  if (typeof sound._node.bufferSource.stop === 'undefined') {
                    sound._node.bufferSource.noteOff(0);
                  } else {
                    sound._node.bufferSource.stop(0);
                  }

                  // Clean up the buffer source.
                  self._cleanBuffer(sound._node);
                }
              } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                sound._node.currentTime = sound._start || 0;
                sound._node.pause();

                // If this is a live stream, stop download once the audio is stopped.
                if (sound._node.duration === Infinity) {
                  self._clearSound(sound._node);
                }
              }
            }

            if (!internal) {
              self._emit('stop', sound._id);
            }
          }
        }

        return self;
      },

      /**
       * Mute/unmute a single sound or all sounds in this Howl group.
       * @param  {Boolean} muted Set to true to mute and false to unmute.
       * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
       * @return {Howl}
       */
      mute: function(muted, id) {
        var self = this;

        // If the sound hasn't loaded, add it to the load queue to mute when capable.
        if (self._state !== 'loaded'|| self._playLock) {
          self._queue.push({
            event: 'mute',
            action: function() {
              self.mute(muted, id);
            }
          });

          return self;
        }

        // If applying mute/unmute to all sounds, update the group's value.
        if (typeof id === 'undefined') {
          if (typeof muted === 'boolean') {
            self._muted = muted;
          } else {
            return self._muted;
          }
        }

        // If no id is passed, get all ID's to be muted.
        var ids = self._getSoundIds(id);

        for (var i=0; i<ids.length; i++) {
          // Get the sound.
          var sound = self._soundById(ids[i]);

          if (sound) {
            sound._muted = muted;

            // Cancel active fade and set the volume to the end value.
            if (sound._interval) {
              self._stopFade(sound._id);
            }

            if (self._webAudio && sound._node) {
              sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.muted = Howler._muted ? true : muted;
            }

            self._emit('mute', sound._id);
          }
        }

        return self;
      },

      /**
       * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
       *   volume() -> Returns the group's volume value.
       *   volume(id) -> Returns the sound id's current volume.
       *   volume(vol) -> Sets the volume of all sounds in this Howl group.
       *   volume(vol, id) -> Sets the volume of passed sound id.
       * @return {Howl/Number} Returns self or current volume.
       */
      volume: function() {
        var self = this;
        var args = arguments;
        var vol, id;

        // Determine the values based on arguments.
        if (args.length === 0) {
          // Return the value of the groups' volume.
          return self._volume;
        } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
          // First check if this is an ID, and if not, assume it is a new volume.
          var ids = self._getSoundIds();
          var index = ids.indexOf(args[0]);
          if (index >= 0) {
            id = parseInt(args[0], 10);
          } else {
            vol = parseFloat(args[0]);
          }
        } else if (args.length >= 2) {
          vol = parseFloat(args[0]);
          id = parseInt(args[1], 10);
        }

        // Update the volume or return the current volume.
        var sound;
        if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
          // If the sound hasn't loaded, add it to the load queue to change volume when capable.
          if (self._state !== 'loaded'|| self._playLock) {
            self._queue.push({
              event: 'volume',
              action: function() {
                self.volume.apply(self, args);
              }
            });

            return self;
          }

          // Set the group volume.
          if (typeof id === 'undefined') {
            self._volume = vol;
          }

          // Update one or all volumes.
          id = self._getSoundIds(id);
          for (var i=0; i<id.length; i++) {
            // Get the sound.
            sound = self._soundById(id[i]);

            if (sound) {
              sound._volume = vol;

              // Stop currently running fades.
              if (!args[2]) {
                self._stopFade(id[i]);
              }

              if (self._webAudio && sound._node && !sound._muted) {
                sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
              } else if (sound._node && !sound._muted) {
                sound._node.volume = vol * Howler.volume();
              }

              self._emit('volume', sound._id);
            }
          }
        } else {
          sound = id ? self._soundById(id) : self._sounds[0];
          return sound ? sound._volume : 0;
        }

        return self;
      },

      /**
       * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
       * @param  {Number} from The value to fade from (0.0 to 1.0).
       * @param  {Number} to   The volume to fade to (0.0 to 1.0).
       * @param  {Number} len  Time in milliseconds to fade.
       * @param  {Number} id   The sound id (omit to fade all sounds).
       * @return {Howl}
       */
      fade: function(from, to, len, id) {
        var self = this;

        // If the sound hasn't loaded, add it to the load queue to fade when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'fade',
            action: function() {
              self.fade(from, to, len, id);
            }
          });

          return self;
        }

        // Make sure the to/from/len values are numbers.
        from = parseFloat(from);
        to = parseFloat(to);
        len = parseFloat(len);

        // Set the volume to the start position.
        self.volume(from, id);

        // Fade the volume of one or all sounds.
        var ids = self._getSoundIds(id);
        for (var i=0; i<ids.length; i++) {
          // Get the sound.
          var sound = self._soundById(ids[i]);

          // Create a linear fade or fall back to timeouts with HTML5 Audio.
          if (sound) {
            // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
            if (!id) {
              self._stopFade(ids[i]);
            }

            // If we are using Web Audio, let the native methods do the actual fade.
            if (self._webAudio && !sound._muted) {
              var currentTime = Howler.ctx.currentTime;
              var end = currentTime + (len / 1000);
              sound._volume = from;
              sound._node.gain.setValueAtTime(from, currentTime);
              sound._node.gain.linearRampToValueAtTime(to, end);
            }

            self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
          }
        }

        return self;
      },

      /**
       * Starts the internal interval to fade a sound.
       * @param  {Object} sound Reference to sound to fade.
       * @param  {Number} from The value to fade from (0.0 to 1.0).
       * @param  {Number} to   The volume to fade to (0.0 to 1.0).
       * @param  {Number} len  Time in milliseconds to fade.
       * @param  {Number} id   The sound id to fade.
       * @param  {Boolean} isGroup   If true, set the volume on the group.
       */
      _startFadeInterval: function(sound, from, to, len, id, isGroup) {
        var self = this;
        var vol = from;
        var diff = to - from;
        var steps = Math.abs(diff / 0.01);
        var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
        var lastTick = Date.now();

        // Store the value being faded to.
        sound._fadeTo = to;

        // Update the volume value on each interval tick.
        sound._interval = setInterval(function() {
          // Update the volume based on the time since the last tick.
          var tick = (Date.now() - lastTick) / len;
          lastTick = Date.now();
          vol += diff * tick;

          // Make sure the volume is in the right bounds.
          vol = Math.max(0, vol);
          vol = Math.min(1, vol);

          // Round to within 2 decimal points.
          vol = Math.round(vol * 100) / 100;

          // Change the volume.
          if (self._webAudio) {
            sound._volume = vol;
          } else {
            self.volume(vol, sound._id, true);
          }

          // Set the group's volume.
          if (isGroup) {
            self._volume = vol;
          }

          // When the fade is complete, stop it and fire event.
          if ((to < from && vol <= to) || (to > from && vol >= to)) {
            clearInterval(sound._interval);
            sound._interval = null;
            sound._fadeTo = null;
            self.volume(to, sound._id);
            self._emit('fade', sound._id);
          }
        }, stepLen);
      },

      /**
       * Internal method that stops the currently playing fade when
       * a new fade starts, volume is changed or the sound is stopped.
       * @param  {Number} id The sound id.
       * @return {Howl}
       */
      _stopFade: function(id) {
        var self = this;
        var sound = self._soundById(id);

        if (sound && sound._interval) {
          if (self._webAudio) {
            sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
          }

          clearInterval(sound._interval);
          sound._interval = null;
          self.volume(sound._fadeTo, id);
          sound._fadeTo = null;
          self._emit('fade', id);
        }

        return self;
      },

      /**
       * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
       *   loop() -> Returns the group's loop value.
       *   loop(id) -> Returns the sound id's loop value.
       *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
       *   loop(loop, id) -> Sets the loop value of passed sound id.
       * @return {Howl/Boolean} Returns self or current loop value.
       */
      loop: function() {
        var self = this;
        var args = arguments;
        var loop, id, sound;

        // Determine the values for loop and id.
        if (args.length === 0) {
          // Return the grou's loop value.
          return self._loop;
        } else if (args.length === 1) {
          if (typeof args[0] === 'boolean') {
            loop = args[0];
            self._loop = loop;
          } else {
            // Return this sound's loop value.
            sound = self._soundById(parseInt(args[0], 10));
            return sound ? sound._loop : false;
          }
        } else if (args.length === 2) {
          loop = args[0];
          id = parseInt(args[1], 10);
        }

        // If no id is passed, get all ID's to be looped.
        var ids = self._getSoundIds(id);
        for (var i=0; i<ids.length; i++) {
          sound = self._soundById(ids[i]);

          if (sound) {
            sound._loop = loop;
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.loop = loop;
              if (loop) {
                sound._node.bufferSource.loopStart = sound._start || 0;
                sound._node.bufferSource.loopEnd = sound._stop;
              }
            }
          }
        }

        return self;
      },

      /**
       * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
       *   rate() -> Returns the first sound node's current playback rate.
       *   rate(id) -> Returns the sound id's current playback rate.
       *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
       *   rate(rate, id) -> Sets the playback rate of passed sound id.
       * @return {Howl/Number} Returns self or the current playback rate.
       */
      rate: function() {
        var self = this;
        var args = arguments;
        var rate, id;

        // Determine the values based on arguments.
        if (args.length === 0) {
          // We will simply return the current rate of the first node.
          id = self._sounds[0]._id;
        } else if (args.length === 1) {
          // First check if this is an ID, and if not, assume it is a new rate value.
          var ids = self._getSoundIds();
          var index = ids.indexOf(args[0]);
          if (index >= 0) {
            id = parseInt(args[0], 10);
          } else {
            rate = parseFloat(args[0]);
          }
        } else if (args.length === 2) {
          rate = parseFloat(args[0]);
          id = parseInt(args[1], 10);
        }

        // Update the playback rate or return the current value.
        var sound;
        if (typeof rate === 'number') {
          // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
          if (self._state !== 'loaded' || self._playLock) {
            self._queue.push({
              event: 'rate',
              action: function() {
                self.rate.apply(self, args);
              }
            });

            return self;
          }

          // Set the group rate.
          if (typeof id === 'undefined') {
            self._rate = rate;
          }

          // Update one or all volumes.
          id = self._getSoundIds(id);
          for (var i=0; i<id.length; i++) {
            // Get the sound.
            sound = self._soundById(id[i]);

            if (sound) {
              // Keep track of our position when the rate changed and update the playback
              // start position so we can properly adjust the seek position for time elapsed.
              if (self.playing(id[i])) {
                sound._rateSeek = self.seek(id[i]);
                sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
              }
              sound._rate = rate;

              // Change the playback rate.
              if (self._webAudio && sound._node && sound._node.bufferSource) {
                sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
              } else if (sound._node) {
                sound._node.playbackRate = rate;
              }

              // Reset the timers.
              var seek = self.seek(id[i]);
              var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
              var timeout = (duration * 1000) / Math.abs(sound._rate);

              // Start a new end timer if sound is already playing.
              if (self._endTimers[id[i]] || !sound._paused) {
                self._clearTimer(id[i]);
                self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
              }

              self._emit('rate', sound._id);
            }
          }
        } else {
          sound = self._soundById(id);
          return sound ? sound._rate : self._rate;
        }

        return self;
      },

      /**
       * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
       *   seek() -> Returns the first sound node's current seek position.
       *   seek(id) -> Returns the sound id's current seek position.
       *   seek(seek) -> Sets the seek position of the first sound node.
       *   seek(seek, id) -> Sets the seek position of passed sound id.
       * @return {Howl/Number} Returns self or the current seek position.
       */
      seek: function() {
        var self = this;
        var args = arguments;
        var seek, id;

        // Determine the values based on arguments.
        if (args.length === 0) {
          // We will simply return the current position of the first node.
          id = self._sounds[0]._id;
        } else if (args.length === 1) {
          // First check if this is an ID, and if not, assume it is a new seek position.
          var ids = self._getSoundIds();
          var index = ids.indexOf(args[0]);
          if (index >= 0) {
            id = parseInt(args[0], 10);
          } else if (self._sounds.length) {
            id = self._sounds[0]._id;
            seek = parseFloat(args[0]);
          }
        } else if (args.length === 2) {
          seek = parseFloat(args[0]);
          id = parseInt(args[1], 10);
        }

        // If there is no ID, bail out.
        if (typeof id === 'undefined') {
          return self;
        }

        // If the sound hasn't loaded, add it to the load queue to seek when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'seek',
            action: function() {
              self.seek.apply(self, args);
            }
          });

          return self;
        }

        // Get the sound.
        var sound = self._soundById(id);

        if (sound) {
          if (typeof seek === 'number' && seek >= 0) {
            // Pause the sound and update position for restarting playback.
            var playing = self.playing(id);
            if (playing) {
              self.pause(id, true);
            }

            // Move the position of the track and cancel timer.
            sound._seek = seek;
            sound._ended = false;
            self._clearTimer(id);

            // Update the seek position for HTML5 Audio.
            if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
              sound._node.currentTime = seek;
            }

            // Seek and emit when ready.
            var seekAndEmit = function() {
              self._emit('seek', id);

              // Restart the playback if the sound was playing.
              if (playing) {
                self.play(id, true);
              }
            };

            // Wait for the play lock to be unset before emitting (HTML5 Audio).
            if (playing && !self._webAudio) {
              var emitSeek = function() {
                if (!self._playLock) {
                  seekAndEmit();
                } else {
                  setTimeout(emitSeek, 0);
                }
              };
              setTimeout(emitSeek, 0);
            } else {
              seekAndEmit();
            }
          } else {
            if (self._webAudio) {
              var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
              var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
              return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
            } else {
              return sound._node.currentTime;
            }
          }
        }

        return self;
      },

      /**
       * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
       * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
       * @return {Boolean} True if playing and false if not.
       */
      playing: function(id) {
        var self = this;

        // Check the passed sound ID (if any).
        if (typeof id === 'number') {
          var sound = self._soundById(id);
          return sound ? !sound._paused : false;
        }

        // Otherwise, loop through all sounds and check if any are playing.
        for (var i=0; i<self._sounds.length; i++) {
          if (!self._sounds[i]._paused) {
            return true;
          }
        }

        return false;
      },

      /**
       * Get the duration of this sound. Passing a sound id will return the sprite duration.
       * @param  {Number} id The sound id to check. If none is passed, return full source duration.
       * @return {Number} Audio duration in seconds.
       */
      duration: function(id) {
        var self = this;
        var duration = self._duration;

        // If we pass an ID, get the sound and return the sprite length.
        var sound = self._soundById(id);
        if (sound) {
          duration = self._sprite[sound._sprite][1] / 1000;
        }

        return duration;
      },

      /**
       * Returns the current loaded state of this Howl.
       * @return {String} 'unloaded', 'loading', 'loaded'
       */
      state: function() {
        return this._state;
      },

      /**
       * Unload and destroy the current Howl object.
       * This will immediately stop all sound instances attached to this group.
       */
      unload: function() {
        var self = this;

        // Stop playing any active sounds.
        var sounds = self._sounds;
        for (var i=0; i<sounds.length; i++) {
          // Stop the sound if it is currently playing.
          if (!sounds[i]._paused) {
            self.stop(sounds[i]._id);
          }

          // Remove the source or disconnect.
          if (!self._webAudio) {
            // Set the source to 0-second silence to stop any downloading (except in IE).
            self._clearSound(sounds[i]._node);

            // Remove any event listeners.
            sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
            sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);

            // Release the Audio object back to the pool.
            Howler._releaseHtml5Audio(sounds[i]._node);
          }

          // Empty out all of the nodes.
          delete sounds[i]._node;

          // Make sure all timers are cleared out.
          self._clearTimer(sounds[i]._id);
        }

        // Remove the references in the global Howler object.
        var index = Howler._howls.indexOf(self);
        if (index >= 0) {
          Howler._howls.splice(index, 1);
        }

        // Delete this sound from the cache (if no other Howl is using it).
        var remCache = true;
        for (i=0; i<Howler._howls.length; i++) {
          if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
            remCache = false;
            break;
          }
        }

        if (cache && remCache) {
          delete cache[self._src];
        }

        // Clear global errors.
        Howler.noAudio = false;

        // Clear out `self`.
        self._state = 'unloaded';
        self._sounds = [];
        self = null;

        return null;
      },

      /**
       * Listen to a custom event.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to call.
       * @param  {Number}   id    (optional) Only listen to events for this sound.
       * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
       * @return {Howl}
       */
      on: function(event, fn, id, once) {
        var self = this;
        var events = self['_on' + event];

        if (typeof fn === 'function') {
          events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
        }

        return self;
      },

      /**
       * Remove a custom event. Call without parameters to remove all events.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to remove. Leave empty to remove all.
       * @param  {Number}   id    (optional) Only remove events for this sound.
       * @return {Howl}
       */
      off: function(event, fn, id) {
        var self = this;
        var events = self['_on' + event];
        var i = 0;

        // Allow passing just an event and ID.
        if (typeof fn === 'number') {
          id = fn;
          fn = null;
        }

        if (fn || id) {
          // Loop through event store and remove the passed function.
          for (i=0; i<events.length; i++) {
            var isId = (id === events[i].id);
            if (fn === events[i].fn && isId || !fn && isId) {
              events.splice(i, 1);
              break;
            }
          }
        } else if (event) {
          // Clear out all events of this type.
          self['_on' + event] = [];
        } else {
          // Clear out all events of every type.
          var keys = Object.keys(self);
          for (i=0; i<keys.length; i++) {
            if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
              self[keys[i]] = [];
            }
          }
        }

        return self;
      },

      /**
       * Listen to a custom event and remove it once fired.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to call.
       * @param  {Number}   id    (optional) Only listen to events for this sound.
       * @return {Howl}
       */
      once: function(event, fn, id) {
        var self = this;

        // Setup the event listener.
        self.on(event, fn, id, 1);

        return self;
      },

      /**
       * Emit all events of a specific type and pass the sound id.
       * @param  {String} event Event name.
       * @param  {Number} id    Sound ID.
       * @param  {Number} msg   Message to go with event.
       * @return {Howl}
       */
      _emit: function(event, id, msg) {
        var self = this;
        var events = self['_on' + event];

        // Loop through event store and fire all functions.
        for (var i=events.length-1; i>=0; i--) {
          // Only fire the listener if the correct ID is used.
          if (!events[i].id || events[i].id === id || event === 'load') {
            setTimeout(function(fn) {
              fn.call(this, id, msg);
            }.bind(self, events[i].fn), 0);

            // If this event was setup with `once`, remove it.
            if (events[i].once) {
              self.off(event, events[i].fn, events[i].id);
            }
          }
        }

        // Pass the event type into load queue so that it can continue stepping.
        self._loadQueue(event);

        return self;
      },

      /**
       * Queue of actions initiated before the sound has loaded.
       * These will be called in sequence, with the next only firing
       * after the previous has finished executing (even if async like play).
       * @return {Howl}
       */
      _loadQueue: function(event) {
        var self = this;

        if (self._queue.length > 0) {
          var task = self._queue[0];

          // Remove this task if a matching event was passed.
          if (task.event === event) {
            self._queue.shift();
            self._loadQueue();
          }

          // Run the task if no event type is passed.
          if (!event) {
            task.action();
          }
        }

        return self;
      },

      /**
       * Fired when playback ends at the end of the duration.
       * @param  {Sound} sound The sound object to work with.
       * @return {Howl}
       */
      _ended: function(sound) {
        var self = this;
        var sprite = sound._sprite;

        // If we are using IE and there was network latency we may be clipping
        // audio before it completes playing. Lets check the node to make sure it
        // believes it has completed, before ending the playback.
        if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
          setTimeout(self._ended.bind(self, sound), 100);
          return self;
        }

        // Should this sound loop?
        var loop = !!(sound._loop || self._sprite[sprite][2]);

        // Fire the ended event.
        self._emit('end', sound._id);

        // Restart the playback for HTML5 Audio loop.
        if (!self._webAudio && loop) {
          self.stop(sound._id, true).play(sound._id);
        }

        // Restart this timer if on a Web Audio loop.
        if (self._webAudio && loop) {
          self._emit('play', sound._id);
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._playStart = Howler.ctx.currentTime;

          var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
          self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
        }

        // Mark the node as paused.
        if (self._webAudio && !loop) {
          sound._paused = true;
          sound._ended = true;
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          self._clearTimer(sound._id);

          // Clean up the buffer source.
          self._cleanBuffer(sound._node);

          // Attempt to auto-suspend AudioContext if no sounds are still playing.
          Howler._autoSuspend();
        }

        // When using a sprite, end the track.
        if (!self._webAudio && !loop) {
          self.stop(sound._id, true);
        }

        return self;
      },

      /**
       * Clear the end timer for a sound playback.
       * @param  {Number} id The sound ID.
       * @return {Howl}
       */
      _clearTimer: function(id) {
        var self = this;

        if (self._endTimers[id]) {
          // Clear the timeout or remove the ended listener.
          if (typeof self._endTimers[id] !== 'function') {
            clearTimeout(self._endTimers[id]);
          } else {
            var sound = self._soundById(id);
            if (sound && sound._node) {
              sound._node.removeEventListener('ended', self._endTimers[id], false);
            }
          }

          delete self._endTimers[id];
        }

        return self;
      },

      /**
       * Return the sound identified by this ID, or return null.
       * @param  {Number} id Sound ID
       * @return {Object}    Sound object or null.
       */
      _soundById: function(id) {
        var self = this;

        // Loop through all sounds and find the one with this ID.
        for (var i=0; i<self._sounds.length; i++) {
          if (id === self._sounds[i]._id) {
            return self._sounds[i];
          }
        }

        return null;
      },

      /**
       * Return an inactive sound from the pool or create a new one.
       * @return {Sound} Sound playback object.
       */
      _inactiveSound: function() {
        var self = this;

        self._drain();

        // Find the first inactive node to recycle.
        for (var i=0; i<self._sounds.length; i++) {
          if (self._sounds[i]._ended) {
            return self._sounds[i].reset();
          }
        }

        // If no inactive node was found, create a new one.
        return new Sound(self);
      },

      /**
       * Drain excess inactive sounds from the pool.
       */
      _drain: function() {
        var self = this;
        var limit = self._pool;
        var cnt = 0;
        var i = 0;

        // If there are less sounds than the max pool size, we are done.
        if (self._sounds.length < limit) {
          return;
        }

        // Count the number of inactive sounds.
        for (i=0; i<self._sounds.length; i++) {
          if (self._sounds[i]._ended) {
            cnt++;
          }
        }

        // Remove excess inactive sounds, going in reverse order.
        for (i=self._sounds.length - 1; i>=0; i--) {
          if (cnt <= limit) {
            return;
          }

          if (self._sounds[i]._ended) {
            // Disconnect the audio source when using Web Audio.
            if (self._webAudio && self._sounds[i]._node) {
              self._sounds[i]._node.disconnect(0);
            }

            // Remove sounds until we have the pool size.
            self._sounds.splice(i, 1);
            cnt--;
          }
        }
      },

      /**
       * Get all ID's from the sounds pool.
       * @param  {Number} id Only return one ID if one is passed.
       * @return {Array}    Array of IDs.
       */
      _getSoundIds: function(id) {
        var self = this;

        if (typeof id === 'undefined') {
          var ids = [];
          for (var i=0; i<self._sounds.length; i++) {
            ids.push(self._sounds[i]._id);
          }

          return ids;
        } else {
          return [id];
        }
      },

      /**
       * Load the sound back into the buffer source.
       * @param  {Sound} sound The sound object to work with.
       * @return {Howl}
       */
      _refreshBuffer: function(sound) {
        var self = this;

        // Setup the buffer source for playback.
        sound._node.bufferSource = Howler.ctx.createBufferSource();
        sound._node.bufferSource.buffer = cache[self._src];

        // Connect to the correct node.
        if (sound._panner) {
          sound._node.bufferSource.connect(sound._panner);
        } else {
          sound._node.bufferSource.connect(sound._node);
        }

        // Setup looping and playback rate.
        sound._node.bufferSource.loop = sound._loop;
        if (sound._loop) {
          sound._node.bufferSource.loopStart = sound._start || 0;
          sound._node.bufferSource.loopEnd = sound._stop || 0;
        }
        sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

        return self;
      },

      /**
       * Prevent memory leaks by cleaning up the buffer source after playback.
       * @param  {Object} node Sound's audio node containing the buffer source.
       * @return {Howl}
       */
      _cleanBuffer: function(node) {
        var self = this;
        var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

        if (Howler._scratchBuffer && node.bufferSource) {
          node.bufferSource.onended = null;
          node.bufferSource.disconnect(0);
          if (isIOS) {
            try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
          }
        }
        node.bufferSource = null;

        return self;
      },

      /**
       * Set the source to a 0-second silence to stop any downloading (except in IE).
       * @param  {Object} node Audio node to clear.
       */
      _clearSound: function(node) {
        var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
        if (!checkIE) {
          node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
        }
      }
    };

    /** Single Sound Methods **/
    /***************************************************************************/

    /**
     * Setup the sound object, which each node attached to a Howl group is contained in.
     * @param {Object} howl The Howl parent group.
     */
    var Sound = function(howl) {
      this._parent = howl;
      this.init();
    };
    Sound.prototype = {
      /**
       * Initialize a new Sound object.
       * @return {Sound}
       */
      init: function() {
        var self = this;
        var parent = self._parent;

        // Setup the default parameters.
        self._muted = parent._muted;
        self._loop = parent._loop;
        self._volume = parent._volume;
        self._rate = parent._rate;
        self._seek = 0;
        self._paused = true;
        self._ended = true;
        self._sprite = '__default';

        // Generate a unique ID for this sound.
        self._id = ++Howler._counter;

        // Add itself to the parent's pool.
        parent._sounds.push(self);

        // Create the new node.
        self.create();

        return self;
      },

      /**
       * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
       * @return {Sound}
       */
      create: function() {
        var self = this;
        var parent = self._parent;
        var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

        if (parent._webAudio) {
          // Create the gain node for controlling volume (the source will connect to this).
          self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
          self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
          self._node.paused = true;
          self._node.connect(Howler.masterGain);
        } else {
          // Get an unlocked Audio object from the pool.
          self._node = Howler._obtainHtml5Audio();

          // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
          self._errorFn = self._errorListener.bind(self);
          self._node.addEventListener('error', self._errorFn, false);

          // Listen for 'canplaythrough' event to let us know the sound is ready.
          self._loadFn = self._loadListener.bind(self);
          self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

          // Setup the new audio node.
          self._node.src = parent._src;
          self._node.preload = 'auto';
          self._node.volume = volume * Howler.volume();

          // Begin loading the source.
          self._node.load();
        }

        return self;
      },

      /**
       * Reset the parameters of this sound to the original state (for recycle).
       * @return {Sound}
       */
      reset: function() {
        var self = this;
        var parent = self._parent;

        // Reset all of the parameters of this sound.
        self._muted = parent._muted;
        self._loop = parent._loop;
        self._volume = parent._volume;
        self._rate = parent._rate;
        self._seek = 0;
        self._rateSeek = 0;
        self._paused = true;
        self._ended = true;
        self._sprite = '__default';

        // Generate a new ID so that it isn't confused with the previous sound.
        self._id = ++Howler._counter;

        return self;
      },

      /**
       * HTML5 Audio error listener callback.
       */
      _errorListener: function() {
        var self = this;

        // Fire an error event and pass back the code.
        self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

        // Clear the event listener.
        self._node.removeEventListener('error', self._errorFn, false);
      },

      /**
       * HTML5 Audio canplaythrough listener callback.
       */
      _loadListener: function() {
        var self = this;
        var parent = self._parent;

        // Round up the duration to account for the lower precision in HTML5 Audio.
        parent._duration = Math.ceil(self._node.duration * 10) / 10;

        // Setup a sprite if none is defined.
        if (Object.keys(parent._sprite).length === 0) {
          parent._sprite = {__default: [0, parent._duration * 1000]};
        }

        if (parent._state !== 'loaded') {
          parent._state = 'loaded';
          parent._emit('load');
          parent._loadQueue();
        }

        // Clear the event listener.
        self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
      }
    };

    /** Helper Methods **/
    /***************************************************************************/

    var cache = {};

    /**
     * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
     * @param  {Howl} self
     */
    var loadBuffer = function(self) {
      var url = self._src;

      // Check if the buffer has already been cached and use it instead.
      if (cache[url]) {
        // Set the duration from the cache.
        self._duration = cache[url].duration;

        // Load the sound into this Howl.
        loadSound(self);

        return;
      }

      if (/^data:[^;]+;base64,/.test(url)) {
        // Decode the base64 data URI without XHR, since some browsers don't support it.
        var data = atob(url.split(',')[1]);
        var dataView = new Uint8Array(data.length);
        for (var i=0; i<data.length; ++i) {
          dataView[i] = data.charCodeAt(i);
        }

        decodeAudioData(dataView.buffer, self);
      } else {
        // Load the buffer from the URL.
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.withCredentials = self._xhrWithCredentials;
        xhr.responseType = 'arraybuffer';
        xhr.onload = function() {
          // Make sure we get a successful response back.
          var code = (xhr.status + '')[0];
          if (code !== '0' && code !== '2' && code !== '3') {
            self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
            return;
          }

          decodeAudioData(xhr.response, self);
        };
        xhr.onerror = function() {
          // If there is an error, switch to HTML5 Audio.
          if (self._webAudio) {
            self._html5 = true;
            self._webAudio = false;
            self._sounds = [];
            delete cache[url];
            self.load();
          }
        };
        safeXhrSend(xhr);
      }
    };

    /**
     * Send the XHR request wrapped in a try/catch.
     * @param  {Object} xhr XHR to send.
     */
    var safeXhrSend = function(xhr) {
      try {
        xhr.send();
      } catch (e) {
        xhr.onerror();
      }
    };

    /**
     * Decode audio data from an array buffer.
     * @param  {ArrayBuffer} arraybuffer The audio data.
     * @param  {Howl}        self
     */
    var decodeAudioData = function(arraybuffer, self) {
      // Fire a load error if something broke.
      var error = function() {
        self._emit('loaderror', null, 'Decoding audio data failed.');
      };

      // Load the sound on success.
      var success = function(buffer) {
        if (buffer && self._sounds.length > 0) {
          cache[self._src] = buffer;
          loadSound(self, buffer);
        } else {
          error();
        }
      };

      // Decode the buffer into an audio source.
      if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
        Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
      } else {
        Howler.ctx.decodeAudioData(arraybuffer, success, error);
      }
    };

    /**
     * Sound is now loaded, so finish setting everything up and fire the loaded event.
     * @param  {Howl} self
     * @param  {Object} buffer The decoded buffer sound source.
     */
    var loadSound = function(self, buffer) {
      // Set the duration.
      if (buffer && !self._duration) {
        self._duration = buffer.duration;
      }

      // Setup a sprite if none is defined.
      if (Object.keys(self._sprite).length === 0) {
        self._sprite = {__default: [0, self._duration * 1000]};
      }

      // Fire the loaded event.
      if (self._state !== 'loaded') {
        self._state = 'loaded';
        self._emit('load');
        self._loadQueue();
      }
    };

    /**
     * Setup the audio context when available, or switch to HTML5 Audio mode.
     */
    var setupAudioContext = function() {
      // If we have already detected that Web Audio isn't supported, don't run this step again.
      if (!Howler.usingWebAudio) {
        return;
      }

      // Check if we are using Web Audio and setup the AudioContext if we are.
      try {
        if (typeof AudioContext !== 'undefined') {
          Howler.ctx = new AudioContext();
        } else if (typeof webkitAudioContext !== 'undefined') {
          Howler.ctx = new webkitAudioContext();
        } else {
          Howler.usingWebAudio = false;
        }
      } catch(e) {
        Howler.usingWebAudio = false;
      }

      // If the audio context creation still failed, set using web audio to false.
      if (!Howler.ctx) {
        Howler.usingWebAudio = false;
      }

      // Check if a webview is being used on iOS8 or earlier (rather than the browser).
      // If it is, disable Web Audio as it causes crashing.
      var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
      var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      var version = appVersion ? parseInt(appVersion[1], 10) : null;
      if (iOS && version && version < 9) {
        var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
        if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
          Howler.usingWebAudio = false;
        }
      }

      // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
      if (Howler.usingWebAudio) {
        Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : 1, Howler.ctx.currentTime);
        Howler.masterGain.connect(Howler.ctx.destination);
      }

      // Re-run the setup on Howler.
      Howler._setup();
    };

    // Add support for CommonJS libraries such as browserify.
    {
      exports.Howler = Howler;
      exports.Howl = Howl;
    }

    // Define globally in case AMD is not available or unused.
    if (typeof window !== 'undefined') {
      window.HowlerGlobal = HowlerGlobal;
      window.Howler = Howler;
      window.Howl = Howl;
      window.Sound = Sound;
    } else if (typeof commonjsGlobal !== 'undefined') { // Add to global in Node.js (for testing, etc).
      commonjsGlobal.HowlerGlobal = HowlerGlobal;
      commonjsGlobal.Howler = Howler;
      commonjsGlobal.Howl = Howl;
      commonjsGlobal.Sound = Sound;
    }
  })();


  /*!
   *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
   *  
   *  howler.js v2.1.2
   *  howlerjs.com
   *
   *  (c) 2013-2019, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   */

  (function() {

    // Setup default properties.
    HowlerGlobal.prototype._pos = [0, 0, 0];
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

    /** Global Methods **/
    /***************************************************************************/

    /**
     * Helper method to update the stereo panning position of all current Howls.
     * Future Howls will not use this value unless explicitly set.
     * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
     * @return {Howler/Number}     Self or current stereo panning value.
     */
    HowlerGlobal.prototype.stereo = function(pan) {
      var self = this;

      // Stop right here if not using Web Audio.
      if (!self.ctx || !self.ctx.listener) {
        return self;
      }

      // Loop through all Howls and update their stereo panning.
      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].stereo(pan);
      }

      return self;
    };

    /**
     * Get/set the position of the listener in 3D cartesian space. Sounds using
     * 3D position will be relative to the listener's position.
     * @param  {Number} x The x-position of the listener.
     * @param  {Number} y The y-position of the listener.
     * @param  {Number} z The z-position of the listener.
     * @return {Howler/Array}   Self or current listener position.
     */
    HowlerGlobal.prototype.pos = function(x, y, z) {
      var self = this;

      // Stop right here if not using Web Audio.
      if (!self.ctx || !self.ctx.listener) {
        return self;
      }

      // Set the defaults for optional 'y' & 'z'.
      y = (typeof y !== 'number') ? self._pos[1] : y;
      z = (typeof z !== 'number') ? self._pos[2] : z;

      if (typeof x === 'number') {
        self._pos = [x, y, z];

        if (typeof self.ctx.listener.positionX !== 'undefined') {
          self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
          self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
          self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
        } else {
          self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
        }
      } else {
        return self._pos;
      }

      return self;
    };

    /**
     * Get/set the direction the listener is pointing in the 3D cartesian space.
     * A front and up vector must be provided. The front is the direction the
     * face of the listener is pointing, and up is the direction the top of the
     * listener is pointing. Thus, these values are expected to be at right angles
     * from each other.
     * @param  {Number} x   The x-orientation of the listener.
     * @param  {Number} y   The y-orientation of the listener.
     * @param  {Number} z   The z-orientation of the listener.
     * @param  {Number} xUp The x-orientation of the top of the listener.
     * @param  {Number} yUp The y-orientation of the top of the listener.
     * @param  {Number} zUp The z-orientation of the top of the listener.
     * @return {Howler/Array}     Returns self or the current orientation vectors.
     */
    HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
      var self = this;

      // Stop right here if not using Web Audio.
      if (!self.ctx || !self.ctx.listener) {
        return self;
      }

      // Set the defaults for optional 'y' & 'z'.
      var or = self._orientation;
      y = (typeof y !== 'number') ? or[1] : y;
      z = (typeof z !== 'number') ? or[2] : z;
      xUp = (typeof xUp !== 'number') ? or[3] : xUp;
      yUp = (typeof yUp !== 'number') ? or[4] : yUp;
      zUp = (typeof zUp !== 'number') ? or[5] : zUp;

      if (typeof x === 'number') {
        self._orientation = [x, y, z, xUp, yUp, zUp];

        if (typeof self.ctx.listener.forwardX !== 'undefined') {
          self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
          self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
          self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
          self.ctx.listener.upX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
          self.ctx.listener.upY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
          self.ctx.listener.upZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        } else {
          self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
        }
      } else {
        return or;
      }

      return self;
    };

    /** Group Methods **/
    /***************************************************************************/

    /**
     * Add new properties to the core init.
     * @param  {Function} _super Core init method.
     * @return {Howl}
     */
    Howl.prototype.init = (function(_super) {
      return function(o) {
        var self = this;

        // Setup user-defined default properties.
        self._orientation = o.orientation || [1, 0, 0];
        self._stereo = o.stereo || null;
        self._pos = o.pos || null;
        self._pannerAttr = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
        };

        // Setup event listeners.
        self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
        self._onpos = o.onpos ? [{fn: o.onpos}] : [];
        self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

        // Complete initilization with howler.js core's init function.
        return _super.call(this, o);
      };
    })(Howl.prototype.init);

    /**
     * Get/set the stereo panning of the audio source for this sound or all in the group.
     * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
     * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
     * @return {Howl/Number}    Returns self or the current stereo panning value.
     */
    Howl.prototype.stereo = function(pan, id) {
      var self = this;

      // Stop right here if not using Web Audio.
      if (!self._webAudio) {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'stereo',
          action: function() {
            self.stereo(pan, id);
          }
        });

        return self;
      }

      // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
      var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

      // Setup the group's stereo panning if no ID is passed.
      if (typeof id === 'undefined') {
        // Return the group's stereo panning if no parameters are passed.
        if (typeof pan === 'number') {
          self._stereo = pan;
          self._pos = [pan, 0, 0];
        } else {
          return self._stereo;
        }
      }

      // Change the streo panning of one or all sounds in group.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          if (typeof pan === 'number') {
            sound._stereo = pan;
            sound._pos = [pan, 0, 0];

            if (sound._node) {
              // If we are falling back, make sure the panningModel is equalpower.
              sound._pannerAttr.panningModel = 'equalpower';

              // Check if there is a panner setup and create a new one if not.
              if (!sound._panner || !sound._panner.pan) {
                setupPanner(sound, pannerType);
              }

              if (pannerType === 'spatial') {
                if (typeof sound._panner.positionX !== 'undefined') {
                  sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                  sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                  sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                } else {
                  sound._panner.setPosition(pan, 0, 0);
                }
              } else {
                sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
              }
            }

            self._emit('stereo', sound._id);
          } else {
            return sound._stereo;
          }
        }
      }

      return self;
    };

    /**
     * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
     * @param  {Number} x  The x-position of the audio source.
     * @param  {Number} y  The y-position of the audio source.
     * @param  {Number} z  The z-position of the audio source.
     * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
     * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
     */
    Howl.prototype.pos = function(x, y, z, id) {
      var self = this;

      // Stop right here if not using Web Audio.
      if (!self._webAudio) {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to change position when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'pos',
          action: function() {
            self.pos(x, y, z, id);
          }
        });

        return self;
      }

      // Set the defaults for optional 'y' & 'z'.
      y = (typeof y !== 'number') ? 0 : y;
      z = (typeof z !== 'number') ? -0.5 : z;

      // Setup the group's spatial position if no ID is passed.
      if (typeof id === 'undefined') {
        // Return the group's spatial position if no parameters are passed.
        if (typeof x === 'number') {
          self._pos = [x, y, z];
        } else {
          return self._pos;
        }
      }

      // Change the spatial position of one or all sounds in group.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          if (typeof x === 'number') {
            sound._pos = [x, y, z];

            if (sound._node) {
              // Check if there is a panner setup and create a new one if not.
              if (!sound._panner || sound._panner.pan) {
                setupPanner(sound, 'spatial');
              }

              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(x, y, z);
              }
            }

            self._emit('pos', sound._id);
          } else {
            return sound._pos;
          }
        }
      }

      return self;
    };

    /**
     * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
     * space. Depending on how direction the sound is, based on the `cone` attributes,
     * a sound pointing away from the listener can be quiet or silent.
     * @param  {Number} x  The x-orientation of the source.
     * @param  {Number} y  The y-orientation of the source.
     * @param  {Number} z  The z-orientation of the source.
     * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
     * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
     */
    Howl.prototype.orientation = function(x, y, z, id) {
      var self = this;

      // Stop right here if not using Web Audio.
      if (!self._webAudio) {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'orientation',
          action: function() {
            self.orientation(x, y, z, id);
          }
        });

        return self;
      }

      // Set the defaults for optional 'y' & 'z'.
      y = (typeof y !== 'number') ? self._orientation[1] : y;
      z = (typeof z !== 'number') ? self._orientation[2] : z;

      // Setup the group's spatial orientation if no ID is passed.
      if (typeof id === 'undefined') {
        // Return the group's spatial orientation if no parameters are passed.
        if (typeof x === 'number') {
          self._orientation = [x, y, z];
        } else {
          return self._orientation;
        }
      }

      // Change the spatial orientation of one or all sounds in group.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          if (typeof x === 'number') {
            sound._orientation = [x, y, z];

            if (sound._node) {
              // Check if there is a panner setup and create a new one if not.
              if (!sound._panner) {
                // Make sure we have a position to setup the node with.
                if (!sound._pos) {
                  sound._pos = self._pos || [0, 0, -0.5];
                }

                setupPanner(sound, 'spatial');
              }

              if (typeof sound._panner.orientationX !== 'undefined') {
                sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
                sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
                sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
              } else {
                sound._panner.setOrientation(x, y, z);
              }
            }

            self._emit('orientation', sound._id);
          } else {
            return sound._orientation;
          }
        }
      }

      return self;
    };

    /**
     * Get/set the panner node's attributes for a sound or group of sounds.
     * This method can optionall take 0, 1 or 2 arguments.
     *   pannerAttr() -> Returns the group's values.
     *   pannerAttr(id) -> Returns the sound id's values.
     *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
     *   pannerAttr(o, id) -> Set's the values of passed sound id.
     *
     *   Attributes:
     *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
     *                      inside of which there will be no volume reduction.
     *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
     *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
     *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
     *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
     *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
     *                     listener. Can be `linear`, `inverse` or `exponential.
     *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
     *                   will not be reduced any further.
     *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
     *                   This is simply a variable of the distance model and has a different effect depending on which model
     *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
     *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
     *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
     *                     with `inverse` and `exponential`.
     *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
     *                     Can be `HRTF` or `equalpower`.
     *
     * @return {Howl/Object} Returns self or current panner attributes.
     */
    Howl.prototype.pannerAttr = function() {
      var self = this;
      var args = arguments;
      var o, id, sound;

      // Stop right here if not using Web Audio.
      if (!self._webAudio) {
        return self;
      }

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the group's panner attribute values.
        return self._pannerAttr;
      } else if (args.length === 1) {
        if (typeof args[0] === 'object') {
          o = args[0];

          // Set the grou's panner attribute values.
          if (typeof id === 'undefined') {
            if (!o.pannerAttr) {
              o.pannerAttr = {
                coneInnerAngle: o.coneInnerAngle,
                coneOuterAngle: o.coneOuterAngle,
                coneOuterGain: o.coneOuterGain,
                distanceModel: o.distanceModel,
                maxDistance: o.maxDistance,
                refDistance: o.refDistance,
                rolloffFactor: o.rolloffFactor,
                panningModel: o.panningModel
              };
            }

            self._pannerAttr = {
              coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
              coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
              coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
              distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
              maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
              refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
              rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
              panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
            };
          }
        } else {
          // Return this sound's panner attribute values.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._pannerAttr : self._pannerAttr;
        }
      } else if (args.length === 2) {
        o = args[0];
        id = parseInt(args[1], 10);
      }

      // Update the values of the specified sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          // Merge the new values into the sound.
          var pa = sound._pannerAttr;
          pa = {
            coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
            coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
            coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
            distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
            maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
            refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
            rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
            panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
          };

          // Update the panner values or create a new panner if none exists.
          var panner = sound._panner;
          if (panner) {
            panner.coneInnerAngle = pa.coneInnerAngle;
            panner.coneOuterAngle = pa.coneOuterAngle;
            panner.coneOuterGain = pa.coneOuterGain;
            panner.distanceModel = pa.distanceModel;
            panner.maxDistance = pa.maxDistance;
            panner.refDistance = pa.refDistance;
            panner.rolloffFactor = pa.rolloffFactor;
            panner.panningModel = pa.panningModel;
          } else {
            // Make sure we have a position to setup the node with.
            if (!sound._pos) {
              sound._pos = self._pos || [0, 0, -0.5];
            }

            // Create a new panner node.
            setupPanner(sound, 'spatial');
          }
        }
      }

      return self;
    };

    /** Single Sound Methods **/
    /***************************************************************************/

    /**
     * Add new properties to the core Sound init.
     * @param  {Function} _super Core Sound init method.
     * @return {Sound}
     */
    Sound.prototype.init = (function(_super) {
      return function() {
        var self = this;
        var parent = self._parent;

        // Setup user-defined default properties.
        self._orientation = parent._orientation;
        self._stereo = parent._stereo;
        self._pos = parent._pos;
        self._pannerAttr = parent._pannerAttr;

        // Complete initilization with howler.js core Sound's init function.
        _super.call(this);

        // If a stereo or position was specified, set it up.
        if (self._stereo) {
          parent.stereo(self._stereo);
        } else if (self._pos) {
          parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
        }
      };
    })(Sound.prototype.init);

    /**
     * Override the Sound.reset method to clean up properties from the spatial plugin.
     * @param  {Function} _super Sound reset method.
     * @return {Sound}
     */
    Sound.prototype.reset = (function(_super) {
      return function() {
        var self = this;
        var parent = self._parent;

        // Reset all spatial plugin properties on this sound.
        self._orientation = parent._orientation;
        self._stereo = parent._stereo;
        self._pos = parent._pos;
        self._pannerAttr = parent._pannerAttr;

        // If a stereo or position was specified, set it up.
        if (self._stereo) {
          parent.stereo(self._stereo);
        } else if (self._pos) {
          parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
        } else if (self._panner) {
          // Disconnect the panner.
          self._panner.disconnect(0);
          self._panner = undefined;
          parent._refreshBuffer(self);
        }

        // Complete resetting of the sound.
        return _super.call(this);
      };
    })(Sound.prototype.reset);

    /** Helper Methods **/
    /***************************************************************************/

    /**
     * Create a new panner node and save it on the sound.
     * @param  {Sound} sound Specific sound to setup panning on.
     * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
     */
    var setupPanner = function(sound, type) {
      type = type || 'spatial';

      // Create the new panner node.
      if (type === 'spatial') {
        sound._panner = Howler.ctx.createPanner();
        sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
        sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
        sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
        sound._panner.distanceModel = sound._pannerAttr.distanceModel;
        sound._panner.maxDistance = sound._pannerAttr.maxDistance;
        sound._panner.refDistance = sound._pannerAttr.refDistance;
        sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
        sound._panner.panningModel = sound._pannerAttr.panningModel;

        if (typeof sound._panner.positionX !== 'undefined') {
          sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
          sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
          sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
        } else {
          sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
        }

        if (typeof sound._panner.orientationX !== 'undefined') {
          sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
          sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
          sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
        } else {
          sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
        }
      } else {
        sound._panner = Howler.ctx.createStereoPanner();
        sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
      }

      sound._panner.connect(sound._node);

      // Update the connections.
      if (!sound._paused) {
        sound._parent.pause(sound._id, true).play(sound._id, true);
      }
    };
  })();
  });
  var howler_1 = howler.Howler;
  var howler_2 = howler.Howl;

  /**
   * @class 扩展数组类
   */
  var BaseArray =
  /*#__PURE__*/
  function (_Array) {
    inherits(BaseArray, _Array);

    function BaseArray() {
      var _this;

      classCallCheck(this, BaseArray);

      _this = possibleConstructorReturn(this, getPrototypeOf(BaseArray).call(this, arguments.length));

      _this.setTo.apply(assertThisInitialized(_this), arguments);

      return _this;
    }
    /**
     * 将数组所有内容设置为同一个值
     * @param {Any} n
     */


    createClass(BaseArray, [{
      key: "set",
      value: function set(n) {
        for (var i = 0; i < this.length; i++) {
          this[i] = n;
        }

        return this;
      }
      /**
       * 将数组内容分别设置为各参数值
       */

    }, {
      key: "setTo",
      value: function setTo() {
        return this.setToArray(arguments);
      }
      /**
       * 将数组参数分别设置为float数组的值
       * @param {Array} float
       */

    }, {
      key: "setToArray",
      value: function setToArray(_float) {
        if (_float === this) return this;

        for (var i = 0; i < _float.length; i++) {
          this[i] = _float[i];
        }

        return this;
      }
      /**
       * 拷贝本类
       */

    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().setToArray(this);
      }
      /**
       * 判断数组长度和内部值全部相同
       * @param {Array} float 用来比较的数组
       * @param {Boolean} absolute 是否判断长度相同
       */

    }, {
      key: "equals",
      value: function equals(_float2) {
        var absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        if (absolute && this.length != _float2.length) return false;
        var length = absolute ? this.length : Math.min(this.length, _float2.length);

        for (var i = 0; i < length; i++) {
          if (this[i] != _float2[i]) return false;
        }

        return true;
      }
      /**
       * 判断数组各值和各实参相同
       */

    }, {
      key: "equalsSome",
      value: function equalsSome() {
        return this.equals(arguments);
      }
      /**
       * 获取各种TypeArray
       */

    }, {
      key: "Int8Array",
      get: function get() {
        return new Int8Array(this);
      }
    }, {
      key: "Uint8Array",
      get: function get() {
        return new Uint8Array(this);
      }
    }, {
      key: "Uint8ClampedArray",
      get: function get() {
        return new Uint8ClampedArray(this);
      }
    }, {
      key: "Int16Array",
      get: function get() {
        return new Int16Array(this);
      }
    }, {
      key: "Uint16Array",
      get: function get() {
        return new Uint16Array(this);
      }
    }, {
      key: "Int32Array",
      get: function get() {
        return new Int32Array(this);
      }
    }, {
      key: "Uint32Array",
      get: function get() {
        return new Uint32Array(this);
      }
    }, {
      key: "Float32Array",
      get: function get() {
        return new Float32Array(this);
      }
    }, {
      key: "Float64Array",
      get: function get() {
        return new Float64Array(this);
      }
    }, {
      key: "BigInt64Array",
      get: function get() {
        return new BigInt64Array(this);
      }
    }, {
      key: "BigUint64Array",
      get: function get() {
        return new BigUint64Array(this);
      }
    }]);

    return BaseArray;
  }(wrapNativeSuper(Array));

  /**
   * 获取随机值
   * @param {Number} a 随机范围从0到a(不包含a)
   * @param {Number} b 随机结果增加值
   * @return {Number} 一个随机值
   */
  var Random = function Random() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return (Math.random() * a | 0) + b;
  };
  /**
   * 获取随机值
   * @param {Number} min 最小值
   * @param {Number} max 最大值
   * @return {Number} 一个随机值
   */


  Random.To = function (min, max) {
    return Random(max - min, min);
  };
  /**
   * 从数组获取随机项
   * @param {Array} a 源数组
   * @return {*} a中的随机值
   */


  Random.Array = function (a) {
    return a[Random(a.length)];
  };
  /**
   * 从键值对获取任意随机项键的数组
   * @param {Array|Object} a 数据源
   * @param {Number} b 获取数量
   * @return {Array[*]} b个不重复的a中的键组成的数组
   */


  Random.Array.Keys = Random.Keys = function (a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    if (!a || !b) return [];
    var out = [];
    var keys = Object.keys(a);

    while (keys.length > 0 && out.length < b) {
      out.push(keys.splice(Random(keys.length), 1)[0]);
    }

    return out;
  };
  /**
   * 从键值对获取任意随机项值的数组
   * @param {Array|Object} a 数据源
   * @param {Number} b 获取数量
   * @return {Array[*]} b个不重复的a中的键组成的数组
   */


  Random.Array.Values = Random.Values = function (a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    if (!a || !b) return [];
    var out = [];
    var keys = Object.keys(a);

    while (keys.length > 0 && out.length < b) {
      var key = keys.splice(Random(keys.length), 1)[0];
      out.push(a[key]);
    }

    return out;
  };

  var _temp$1;

  var Week = ['日', '一', '二', '三', '四', '五', '六'];
  var Time = (_temp$1 =
  /*#__PURE__*/
  function () {
    function Time() {
      classCallCheck(this, Time);

      defineProperty(this, "Date", null);
    }

    createClass(Time, [{
      key: "Set",

      /**
       * 设置时间
       * @param {Any} value 设置时间值
       * @param {String} fmt 源格式
       * jstimestamp 13位时间戳 到毫秒
       * timestamp 10位时间戳 到秒
       */
      value: function Set(value) {
        var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'jstimestamp';

        if (!value) {
          this.Date = null;
        } else if (value instanceof Date) {
          this.Data = value;
        } else if (_typeof_1(value) == 'object') {
          this.Data = null;
        } else if (typeof value == 'function') {
          this.Set(value(), fmt);
        } else if (value > 0) {
          this.Date = fmt == 'jstimestamp' ? new Date(value * 1) : new Date(value * 1000);
        } else if (typeof value == 'string') {
          this.Date = new Date(value); //todo 格式化年月日时分秒
        } else {
          this.Date = null;
        }

        if (!this.Date) this.Date = new Date();
        return this;
      }
      /**
       * 获取时间
       * @param {String} fmt 获取格式
       * jstimestamp 13位时间戳 到毫秒
       * timestamp 10位时间戳 到秒
       * Date 日期类格式
       * YmdHisSwWqQ 根据不同格式取得得值合成字符串
       */

    }, {
      key: "Get",
      value: function Get() {
        var _this = this;

        var fmt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'jstimestamp';
        if (!this.Date) this.Date = new Date();

        switch (fmt) {
          case 'Date':
            return this.Date;

          case 'timestamp':
            return parseInt(this.Date.getTime() / 1000);

          case 'jstimestamp':
            return this.Date.getTime();
        }

        return fmt.replace(/[YmdHisSwWqQ]/g, function (k) {
          return _this[k];
        });
      }
      /**
       * 判断两个时间是否是同一天
       * @param {*} a 时间1
       * @param {*} b 时间2
       * @param {*} c 时间1格式
       * @param {*} d 时间2格式
       */

    }, {
      key: "OneDay",
      value: function OneDay(a, b, c, d) {
        return this.Set(a, c).Get('Ymd') == this.Set(b, d).Get('Ymd');
      }
      /**
       * 判断两个时间是否是同一周
       * @param {*} a 时间1
       * @param {*} b 时间2
       * @param {*} c 时间1格式
       * @param {*} d 时间2格式
       */

    }, {
      key: "OneWeek",
      value: function OneWeek(a, b, c, d) {
        return this.Set(a, c).ToWeek().Get('Ymd') == this.Set(b, d).ToWeek().Get('Ymd');
      }
      /**
       * 将时间前往本周的某一天
       * @param {*} WeekN
       */

    }, {
      key: "ToWeek",
      value: function ToWeek() {
        var WeekN = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        this.Date.setDate(this.Date.getDate() - (this.w || 7) + WeekN);
        return this;
      }
      /**
       * 获取本周某一天的当前时间
       * @param {*} WeekN
       * @param {*} fmt
       */

    }, {
      key: "GetWeek",
      value: function GetWeek(WeeN, fmt) {
        return this.ToWeek(WeeN).Get(fmt);
      }
    }, {
      key: "Y",
      get: function get() {
        return this.Date.getFullYear();
      }
    }, {
      key: "m",
      get: function get() {
        return ('00' + (this.Date.getMonth() + 1)).slice(-2);
      }
    }, {
      key: "d",
      get: function get() {
        return ('00' + this.Date.getDate()).slice(-2);
      }
    }, {
      key: "H",
      get: function get() {
        return ('00' + this.Date.getHours()).slice(-2);
      }
    }, {
      key: "i",
      get: function get() {
        return ('00' + this.Date.getMinutes()).slice(-2);
      }
    }, {
      key: "s",
      get: function get() {
        return ('00' + this.Date.getSeconds()).slice(-2);
      }
    }, {
      key: "S",
      get: function get() {
        return ('000' + this.Date.getMilliseconds()).slice(-3);
      }
    }, {
      key: "w",
      get: function get() {
        return this.Date.getDay();
      }
    }, {
      key: "W",
      get: function get() {
        return Week[this.w];
      }
    }, {
      key: "q",
      get: function get() {
        return (this.Date.getMonth() + 3) / 3 | 0;
      }
    }, {
      key: "Q",
      get: function get() {
        return Week[this.q];
      }
    }]);

    return Time;
  }(), _temp$1);
  var time = new Time();

  var Component =
  /*#__PURE__*/
  function (_subClass) {
    inherits(Component, _subClass);

    function Component() {
      var _getPrototypeOf2;

      var _this;

      classCallCheck(this, Component);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Component)).call.apply(_getPrototypeOf2, [this].concat(args)));

      defineProperty(assertThisInitialized(_this), "id", ++Component.CID);

      return _this;
    }

    return Component;
  }(subClass);

  defineProperty(Component, "CID", 0);

  var Loader =
  /*#__PURE__*/
  function (_Event) {
    inherits(Loader, _Event);

    function Loader() {
      var _getPrototypeOf2;

      var _this;

      classCallCheck(this, Loader);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Loader)).call.apply(_getPrototypeOf2, [this].concat(args)));

      defineProperty(assertThisInitialized(_this), "resources", {});

      return _this;
    }

    createClass(Loader, [{
      key: "Set",
      value: function Set(url) {
        throw Error('请先挂载加载函数(Set)');
      }
    }, {
      key: "load",
      value: function load(key, url) {
        var _this2 = this;

        this.emit('load', key, url);
        return this.Set(url).then(function (res) {
          _this2.emit('loaded', key, url, res);

          _this2.resources[key] = res;
        });
      }
    }, {
      key: "preLoad",
      value: function preLoad() {
        var _this3 = this;

        var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var Keys = Object.keys(map);
        this.emit('preLoad', Keys.length);
        return Promise.all(Keys.map(function (key) {
          return _this3.load(prefix + key, map[key]);
        }));
      }
    }]);

    return Loader;
  }(eventemitter3);

  var ImageControl$1 =
  /*#__PURE__*/
  function (_Loader) {
    inherits(ImageControl, _Loader);

    function ImageControl() {
      classCallCheck(this, ImageControl);

      return possibleConstructorReturn(this, getPrototypeOf(ImageControl).apply(this, arguments));
    }

    createClass(ImageControl, [{
      key: "Set",
      value: function Set(url) {
        return new Promise(function (resolve, reject) {
          var image = new Image();

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
        return this.resources[key] || ImageControl.Error || (ImageControl.Error = this.Get());
      }
    }]);

    return ImageControl;
  }(Loader);

  defineProperty(ImageControl$1, "Error", null);

  var AudioControl =
  /*#__PURE__*/
  function (_Loader) {
    inherits(AudioControl, _Loader);

    function AudioControl() {
      var _getPrototypeOf2;

      var _this;

      classCallCheck(this, AudioControl);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(AudioControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

      defineProperty(assertThisInitialized(_this), "_mute", false);

      return _this;
    }

    createClass(AudioControl, [{
      key: "get",
      //获取音频
      value: function get(key) {
        return this.resources[key] || AudioControl.Error;
      } //静音

    }, {
      key: "Set",
      //加载文件
      value: function Set(url) {
        return new Promise(function (resolve, reject) {
          var audio = new howler_2({
            src: url,
            loop: false,
            autoplay: false
          });
          audio.once('load', function () {
            audio.key = url;
            resolve(audio);
          });
        });
      }
    }, {
      key: "mute",
      get: function get() {
        return this._mute;
      },
      set: function set(mute) {
        this._mute = mute;
        howler_1.mute(mute);
      } //设置音量

    }, {
      key: "volume",
      set: function set() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        howler_1.volume(v);
      },
      get: function get() {
        return howler_1.volume();
      }
    }]);

    return AudioControl;
  }(Loader);

  defineProperty(AudioControl, "Error", new howler_2());



  var index$4 = /*#__PURE__*/Object.freeze({
  	__proto__: null,
  	Loader: Loader,
  	Image: ImageControl$1,
  	Audio: AudioControl
  });

  var WxgameImage =
  /*#__PURE__*/
  function (_Core$Resource$Loader) {
    inherits(WxgameImage, _Core$Resource$Loader);

    function WxgameImage() {
      classCallCheck(this, WxgameImage);

      return possibleConstructorReturn(this, getPrototypeOf(WxgameImage).apply(this, arguments));
    }

    createClass(WxgameImage, [{
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
  }(index$4.Loader);

  var WxgameAudio =
  /*#__PURE__*/
  function (_Core$Resource$Loader) {
    inherits(WxgameAudio, _Core$Resource$Loader);

    function WxgameAudio() {
      var _getPrototypeOf2;

      var _this;

      classCallCheck(this, WxgameAudio);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(WxgameAudio)).call.apply(_getPrototypeOf2, [this].concat(args)));

      defineProperty(assertThisInitialized(_this), "_mute", false);

      return _this;
    }

    createClass(WxgameAudio, [{
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
  }(index$4.Loader);



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
          return resolve(root[action](key ? defineProperty({}, key, args) : args));
        });
      };
    } else if (mode == 0) {
      return function (args, key) {
        return new Promise(function (success, fail) {
          return root[action](Object.assign({
            success: success,
            fail: fail
          }, key ? defineProperty({}, key, args) : args));
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

  var has = Object.prototype.hasOwnProperty;
  var isArray = Array.isArray;

  var hexTable = (function () {
      var array = [];
      for (var i = 0; i < 256; ++i) {
          array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
      }

      return array;
  }());

  var compactQueue = function compactQueue(queue) {
      while (queue.length > 1) {
          var item = queue.pop();
          var obj = item.obj[item.prop];

          if (isArray(obj)) {
              var compacted = [];

              for (var j = 0; j < obj.length; ++j) {
                  if (typeof obj[j] !== 'undefined') {
                      compacted.push(obj[j]);
                  }
              }

              item.obj[item.prop] = compacted;
          }
      }
  };

  var arrayToObject = function arrayToObject(source, options) {
      var obj = options && options.plainObjects ? Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
          if (typeof source[i] !== 'undefined') {
              obj[i] = source[i];
          }
      }

      return obj;
  };

  var merge = function merge(target, source, options) {
      /* eslint no-param-reassign: 0 */
      if (!source) {
          return target;
      }

      if (typeof source !== 'object') {
          if (isArray(target)) {
              target.push(source);
          } else if (target && typeof target === 'object') {
              if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                  target[source] = true;
              }
          } else {
              return [target, source];
          }

          return target;
      }

      if (!target || typeof target !== 'object') {
          return [target].concat(source);
      }

      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
          mergeTarget = arrayToObject(target, options);
      }

      if (isArray(target) && isArray(source)) {
          source.forEach(function (item, i) {
              if (has.call(target, i)) {
                  var targetItem = target[i];
                  if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                      target[i] = merge(targetItem, item, options);
                  } else {
                      target.push(item);
                  }
              } else {
                  target[i] = item;
              }
          });
          return target;
      }

      return Object.keys(source).reduce(function (acc, key) {
          var value = source[key];

          if (has.call(acc, key)) {
              acc[key] = merge(acc[key], value, options);
          } else {
              acc[key] = value;
          }
          return acc;
      }, mergeTarget);
  };

  var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function (acc, key) {
          acc[key] = source[key];
          return acc;
      }, target);
  };

  var decode = function (str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, ' ');
      if (charset === 'iso-8859-1') {
          // unescape never throws, no try...catch needed:
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      // utf-8
      try {
          return decodeURIComponent(strWithoutPlus);
      } catch (e) {
          return strWithoutPlus;
      }
  };

  var encode = function encode(str, defaultEncoder, charset) {
      // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
      // It has been adapted here for stricter adherence to RFC 3986
      if (str.length === 0) {
          return str;
      }

      var string = str;
      if (typeof str === 'symbol') {
          string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== 'string') {
          string = String(str);
      }

      if (charset === 'iso-8859-1') {
          return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
              return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
          });
      }

      var out = '';
      for (var i = 0; i < string.length; ++i) {
          var c = string.charCodeAt(i);

          if (
              c === 0x2D // -
              || c === 0x2E // .
              || c === 0x5F // _
              || c === 0x7E // ~
              || (c >= 0x30 && c <= 0x39) // 0-9
              || (c >= 0x41 && c <= 0x5A) // a-z
              || (c >= 0x61 && c <= 0x7A) // A-Z
          ) {
              out += string.charAt(i);
              continue;
          }

          if (c < 0x80) {
              out = out + hexTable[c];
              continue;
          }

          if (c < 0x800) {
              out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          if (c < 0xD800 || c >= 0xE000) {
              out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          i += 1;
          c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
          out += hexTable[0xF0 | (c >> 18)]
              + hexTable[0x80 | ((c >> 12) & 0x3F)]
              + hexTable[0x80 | ((c >> 6) & 0x3F)]
              + hexTable[0x80 | (c & 0x3F)];
      }

      return out;
  };

  var compact = function compact(value) {
      var queue = [{ obj: { o: value }, prop: 'o' }];
      var refs = [];

      for (var i = 0; i < queue.length; ++i) {
          var item = queue[i];
          var obj = item.obj[item.prop];

          var keys = Object.keys(obj);
          for (var j = 0; j < keys.length; ++j) {
              var key = keys[j];
              var val = obj[key];
              if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                  queue.push({ obj: obj, prop: key });
                  refs.push(val);
              }
          }
      }

      compactQueue(queue);

      return value;
  };

  var isRegExp = function isRegExp(obj) {
      return Object.prototype.toString.call(obj) === '[object RegExp]';
  };

  var isBuffer = function isBuffer(obj) {
      if (!obj || typeof obj !== 'object') {
          return false;
      }

      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };

  var combine = function combine(a, b) {
      return [].concat(a, b);
  };

  var utils = {
      arrayToObject: arrayToObject,
      assign: assign,
      combine: combine,
      compact: compact,
      decode: decode,
      encode: encode,
      isBuffer: isBuffer,
      isRegExp: isRegExp,
      merge: merge
  };

  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;



  var Format = {
      RFC1738: 'RFC1738',
      RFC3986: 'RFC3986'
  };

  var formats = utils.assign(
      {
          'default': Format.RFC3986,
          formatters: {
              RFC1738: function (value) {
                  return replace.call(value, percentTwenties, '+');
              },
              RFC3986: function (value) {
                  return String(value);
              }
          }
      },
      Format
  );

  var has$1 = Object.prototype.hasOwnProperty;

  var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
          return prefix + '[]';
      },
      comma: 'comma',
      indices: function indices(prefix, key) {
          return prefix + '[' + key + ']';
      },
      repeat: function repeat(prefix) {
          return prefix;
      }
  };

  var isArray$1 = Array.isArray;
  var push = Array.prototype.push;
  var pushToArray = function (arr, valueOrArray) {
      push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
  };

  var toISO = Date.prototype.toISOString;

  var defaultFormat = formats['default'];
  var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      charset: 'utf-8',
      charsetSentinel: false,
      delimiter: '&',
      encode: true,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
          return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
  };

  var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
      return typeof v === 'string'
          || typeof v === 'number'
          || typeof v === 'boolean'
          || typeof v === 'symbol'
          || typeof v === 'bigint';
  };

  var stringify = function stringify(
      object,
      prefix,
      generateArrayPrefix,
      strictNullHandling,
      skipNulls,
      encoder,
      filter,
      sort,
      allowDots,
      serializeDate,
      formatter,
      encodeValuesOnly,
      charset
  ) {
      var obj = object;
      if (typeof filter === 'function') {
          obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
          obj = serializeDate(obj);
      } else if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
          obj = obj.join(',');
      }

      if (obj === null) {
          if (strictNullHandling) {
              return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
          }

          obj = '';
      }

      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
          if (encoder) {
              var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
              return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
          }
          return [formatter(prefix) + '=' + formatter(String(obj))];
      }

      var values = [];

      if (typeof obj === 'undefined') {
          return values;
      }

      var objKeys;
      if (isArray$1(filter)) {
          objKeys = filter;
      } else {
          var keys = Object.keys(obj);
          objKeys = sort ? keys.sort(sort) : keys;
      }

      for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];

          if (skipNulls && obj[key] === null) {
              continue;
          }

          if (isArray$1(obj)) {
              pushToArray(values, stringify(
                  obj[key],
                  typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                  generateArrayPrefix,
                  strictNullHandling,
                  skipNulls,
                  encoder,
                  filter,
                  sort,
                  allowDots,
                  serializeDate,
                  formatter,
                  encodeValuesOnly,
                  charset
              ));
          } else {
              pushToArray(values, stringify(
                  obj[key],
                  prefix + (allowDots ? '.' + key : '[' + key + ']'),
                  generateArrayPrefix,
                  strictNullHandling,
                  skipNulls,
                  encoder,
                  filter,
                  sort,
                  allowDots,
                  serializeDate,
                  formatter,
                  encodeValuesOnly,
                  charset
              ));
          }
      }

      return values;
  };

  var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
      if (!opts) {
          return defaults;
      }

      if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
          throw new TypeError('Encoder has to be a function.');
      }

      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
          throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
      }

      var format = formats['default'];
      if (typeof opts.format !== 'undefined') {
          if (!has$1.call(formats.formatters, opts.format)) {
              throw new TypeError('Unknown format option provided.');
          }
          format = opts.format;
      }
      var formatter = formats.formatters[format];

      var filter = defaults.filter;
      if (typeof opts.filter === 'function' || isArray$1(opts.filter)) {
          filter = opts.filter;
      }

      return {
          addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
          allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
          charset: charset,
          charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
          delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
          encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
          encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
          encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
          filter: filter,
          formatter: formatter,
          serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
          skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
          sort: typeof opts.sort === 'function' ? opts.sort : null,
          strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
      };
  };

  var stringify_1 = function (object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);

      var objKeys;
      var filter;

      if (typeof options.filter === 'function') {
          filter = options.filter;
          obj = filter('', obj);
      } else if (isArray$1(options.filter)) {
          filter = options.filter;
          objKeys = filter;
      }

      var keys = [];

      if (typeof obj !== 'object' || obj === null) {
          return '';
      }

      var arrayFormat;
      if (opts && opts.arrayFormat in arrayPrefixGenerators) {
          arrayFormat = opts.arrayFormat;
      } else if (opts && 'indices' in opts) {
          arrayFormat = opts.indices ? 'indices' : 'repeat';
      } else {
          arrayFormat = 'indices';
      }

      var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

      if (!objKeys) {
          objKeys = Object.keys(obj);
      }

      if (options.sort) {
          objKeys.sort(options.sort);
      }

      for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];

          if (options.skipNulls && obj[key] === null) {
              continue;
          }
          pushToArray(keys, stringify(
              obj[key],
              key,
              generateArrayPrefix,
              options.strictNullHandling,
              options.skipNulls,
              options.encode ? options.encoder : null,
              options.filter,
              options.sort,
              options.allowDots,
              options.serializeDate,
              options.formatter,
              options.encodeValuesOnly,
              options.charset
          ));
      }

      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? '?' : '';

      if (options.charsetSentinel) {
          if (options.charset === 'iso-8859-1') {
              // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
              prefix += 'utf8=%26%2310003%3B&';
          } else {
              // encodeURIComponent('✓')
              prefix += 'utf8=%E2%9C%93&';
          }
      }

      return joined.length > 0 ? prefix + joined : '';
  };

  var has$2 = Object.prototype.hasOwnProperty;
  var isArray$2 = Array.isArray;

  var defaults$1 = {
      allowDots: false,
      allowPrototypes: false,
      arrayLimit: 20,
      charset: 'utf-8',
      charsetSentinel: false,
      comma: false,
      decoder: utils.decode,
      delimiter: '&',
      depth: 5,
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1000,
      parseArrays: true,
      plainObjects: false,
      strictNullHandling: false
  };

  var interpretNumericEntities = function (str) {
      return str.replace(/&#(\d+);/g, function ($0, numberStr) {
          return String.fromCharCode(parseInt(numberStr, 10));
      });
  };

  // This is what browsers will submit when the ✓ character occurs in an
  // application/x-www-form-urlencoded body and the encoding of the page containing
  // the form is iso-8859-1, or when the submitted form has an accept-charset
  // attribute of iso-8859-1. Presumably also with other charsets that do not contain
  // the ✓ character, such as us-ascii.
  var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

  // These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
  var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

  var parseValues = function parseQueryStringValues(str, options) {
      var obj = {};
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
      var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1; // Keep track of where the utf8 sentinel was found
      var i;

      var charset = options.charset;
      if (options.charsetSentinel) {
          for (i = 0; i < parts.length; ++i) {
              if (parts[i].indexOf('utf8=') === 0) {
                  if (parts[i] === charsetSentinel) {
                      charset = 'utf-8';
                  } else if (parts[i] === isoSentinel) {
                      charset = 'iso-8859-1';
                  }
                  skipIndex = i;
                  i = parts.length; // The eslint settings do not allow break;
              }
          }
      }

      for (i = 0; i < parts.length; ++i) {
          if (i === skipIndex) {
              continue;
          }
          var part = parts[i];

          var bracketEqualsPos = part.indexOf(']=');
          var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

          var key, val;
          if (pos === -1) {
              key = options.decoder(part, defaults$1.decoder, charset, 'key');
              val = options.strictNullHandling ? null : '';
          } else {
              key = options.decoder(part.slice(0, pos), defaults$1.decoder, charset, 'key');
              val = options.decoder(part.slice(pos + 1), defaults$1.decoder, charset, 'value');
          }

          if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
              val = interpretNumericEntities(val);
          }

          if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
              val = val.split(',');
          }

          if (part.indexOf('[]=') > -1) {
              val = isArray$2(val) ? [val] : val;
          }

          if (has$2.call(obj, key)) {
              obj[key] = utils.combine(obj[key], val);
          } else {
              obj[key] = val;
          }
      }

      return obj;
  };

  var parseObject = function (chain, val, options) {
      var leaf = val;

      for (var i = chain.length - 1; i >= 0; --i) {
          var obj;
          var root = chain[i];

          if (root === '[]' && options.parseArrays) {
              obj = [].concat(leaf);
          } else {
              obj = options.plainObjects ? Object.create(null) : {};
              var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
              var index = parseInt(cleanRoot, 10);
              if (!options.parseArrays && cleanRoot === '') {
                  obj = { 0: leaf };
              } else if (
                  !isNaN(index)
                  && root !== cleanRoot
                  && String(index) === cleanRoot
                  && index >= 0
                  && (options.parseArrays && index <= options.arrayLimit)
              ) {
                  obj = [];
                  obj[index] = leaf;
              } else {
                  obj[cleanRoot] = leaf;
              }
          }

          leaf = obj;
      }

      return leaf;
  };

  var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
      if (!givenKey) {
          return;
      }

      // Transform dot notation to bracket notation
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

      // The regex chunks

      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;

      // Get the parent

      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;

      // Stash the parent if it exists

      var keys = [];
      if (parent) {
          // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
          if (!options.plainObjects && has$2.call(Object.prototype, parent)) {
              if (!options.allowPrototypes) {
                  return;
              }
          }

          keys.push(parent);
      }

      // Loop through children appending to the array until we hit depth

      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
          i += 1;
          if (!options.plainObjects && has$2.call(Object.prototype, segment[1].slice(1, -1))) {
              if (!options.allowPrototypes) {
                  return;
              }
          }
          keys.push(segment[1]);
      }

      // If there's a remainder, just add whatever is left

      if (segment) {
          keys.push('[' + key.slice(segment.index) + ']');
      }

      return parseObject(keys, val, options);
  };

  var normalizeParseOptions = function normalizeParseOptions(opts) {
      if (!opts) {
          return defaults$1;
      }

      if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
          throw new TypeError('Decoder has to be a function.');
      }

      if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
          throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
      }
      var charset = typeof opts.charset === 'undefined' ? defaults$1.charset : opts.charset;

      return {
          allowDots: typeof opts.allowDots === 'undefined' ? defaults$1.allowDots : !!opts.allowDots,
          allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults$1.allowPrototypes,
          arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults$1.arrayLimit,
          charset: charset,
          charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$1.charsetSentinel,
          comma: typeof opts.comma === 'boolean' ? opts.comma : defaults$1.comma,
          decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults$1.decoder,
          delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults$1.delimiter,
          // eslint-disable-next-line no-implicit-coercion, no-extra-parens
          depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults$1.depth,
          ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
          interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults$1.interpretNumericEntities,
          parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults$1.parameterLimit,
          parseArrays: opts.parseArrays !== false,
          plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults$1.plainObjects,
          strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$1.strictNullHandling
      };
  };

  var parse = function (str, opts) {
      var options = normalizeParseOptions(opts);

      if (str === '' || str === null || typeof str === 'undefined') {
          return options.plainObjects ? Object.create(null) : {};
      }

      var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
      var obj = options.plainObjects ? Object.create(null) : {};

      // Iterate over the keys and setup the new object

      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          var newObj = parseKeys(key, tempObj[key], options);
          obj = utils.merge(obj, newObj, options);
      }

      return utils.compact(obj);
  };

  var lib = {
      formats: formats,
      parse: parse,
      stringify: stringify_1
  };

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
      url: url + '?' + lib.stringify(params, qsConfig),
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

  exports.Api = index$2;
  exports.Resource = index;
  exports.Util = index$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
