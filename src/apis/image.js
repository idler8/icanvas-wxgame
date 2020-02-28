export default class Image {
	load(url) {
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
}
