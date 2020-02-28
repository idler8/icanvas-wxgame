export { default as Canvas } from './apis/canvas.js';
export { default as System } from './apis/system.js';
export { default as Touch } from './apis/touch.js';
export { default as Image } from './apis/image.js';
export { default as Audio } from './apis/audio.js';
export { default as Request } from './apis/request.js';
/**
 * 将微信方法进行变种
 * @param {string} action 方法名
 * @param {Any} root 根元素/上下文
 * @param {Number} mode 变种方式 0:Promise返回success和fail,1:Promise返回执行结果,2:原样子调用
 */
export function Vary(action, root = wx, mode = 0) {
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
}
