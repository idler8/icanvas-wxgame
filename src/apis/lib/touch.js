export default function TouchListen(Touch) {
	wx.onTouchStart(e => Touch.onTouchStart(e));
	wx.onTouchMove(e => Touch.onTouchMove(e));
	wx.onTouchEnd(e => Touch.onTouchEnd(e));
	wx.onTouchCancel(e => Touch.onTouchEnd(e));
}
