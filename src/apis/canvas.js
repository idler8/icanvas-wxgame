/**
 * 获得一个canvas对象
 *
 * @param {String} key 特殊模版标识
 *
 * 打包模式为wxgame时
 * key取share则获得主域内开放canvas
 * key取shared则获得开发域内开放canvas
 */
export default function Canvas(width, height) {
	if (width == 'share' && typeof wx.getOpenDataContext == 'function') {
		let context = wx.getOpenDataContext();
		context.canvas.getContext = () => context;
		return context.canvas;
	} else if (width == 'shared' && typeof wx.getSharedCanvas == 'function') {
		return wx.getSharedCanvas();
	} else if (width == 'main') {
		return Canvas.main || (Canvas.main = wx.createCanvas());
	}
	if (!Canvas.main) Canvas.main = wx.createCanvas();
	let canvas = wx.createCanvas();
	if (width > 0) canvas.width = width;
	if (height > 0) canvas.height = height;
	return canvas;
}
