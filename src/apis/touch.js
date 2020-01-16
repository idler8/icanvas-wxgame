export default function TouchListen() {
	return function(event) {
		wx.onTouchStart(e => event.start(e));
		wx.onTouchMove(e => event.move(e));
		wx.onTouchEnd(e => event.end(e));
		wx.onTouchCancel(e => event.end(e));
	};
}
