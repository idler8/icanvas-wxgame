import axios from './axios.js';
import Audio from './audio.js';
export default function polyfill() {
	if (GameGlobal.axios) return;
	if (!GameGlobal.document) {
		GameGlobal.document = {};
		GameGlobal.document.createElement = function(type) {
			if (type == 'canvas') return wx.createCanvas();
			if (type == 'image') return wx.createImage();
			if (type == 'audio') return new Audio();
		};
	}
	GameGlobal.document.mainCanvas = wx.createCanvas();
	GameGlobal.Image = () => wx.createImage();
	GameGlobal.Audio = Audio;
	GameGlobal.addEventListener = function(type, callback) {
		if (type == 'touchstart') return wx.onTouchStart(callback);
		if (type == 'touchmove') return wx.onTouchMove(callback);
		if (type == 'touchend') return wx.onTouchEnd(callback);
		if (type == 'touchcancel') return wx.onTouchCancel(callback);
	};
	/**
	 * 大致模拟axios
	 */
	GameGlobal.axios = axios();
	/**
	 * 将微信方法进行变种
	 * @param {string} action 方法名
	 * @param {Any} root 根元素/上下文
	 * @param {Number} mode 变种方式 0:Promise返回success和fail,1:Promise返回执行结果,2:原样子调用
	 */
	GameGlobal.vary = function(action, root = wx, mode = 0) {
		if (mode == 2) {
			return root[action];
		} else if (mode == 1) {
			return function(args, key) {
				return new Promise(resolve => resolve(root[action](key ? { [key]: args } : args)));
			};
		} else if (mode == 0) {
			return function(args, key) {
				return new Promise((success, fail) => root[action](Object.assign({ success, fail }, key ? { [key]: args } : args)));
			};
		}
	};
}
