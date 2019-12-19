import * as Core from '@icanvas/core';
export default class WxgameImage extends Core.Resource.Loader {
	Set(url) {
		return new Promise((resolve, reject) => {
			let image = wx.createImage();
			image.onload = function() {
				resolve(image);
			};
			image.onerror = function(e) {
				reject(e);
			};
			image.key = image.src = url;
		});
	}
	get(key) {
		return this.resources[key] || WxgameImage.Error || (WxgameImage.Error = wx.createImage());
	}
}
