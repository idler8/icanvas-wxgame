// play(spriteOrId?: string | number): number; // .play() is not chainable; the other methods are
// pause(id?: number): this;
// stop(id?: number): this;

// mute(): boolean;
// mute(muted: boolean, id?: number): this;

// volume(): number;
// volume(idOrSetVolume: number): this | number;
// volume(volume: number, id: number): this;

// fade(from: number, to: number, duration: number, id?: number): this;

// rate(): number;
// rate(idOrSetRate: number): this | number;
// rate(rate: number, id: number): this;

// seek(seek?: number, id?: number): this | number;

// loop(id?: number): boolean;
// loop(loop: boolean, id?: number): this;

// playing(id?: number): boolean;
// duration(id?: number): number;
// state(): 'unloaded' | 'loading' | 'loaded';
// load(): this;
// unload(): void;
import * as Core from '@icanvas/core';
export default class WxgameAudio extends Core.Resource.Loader {
	//获取音频
	get(key) {
		return this.resources[key] || WxgameAudio.Error || (WxgameAudio.Error = wx.createInnerAudioContext());
	}
	//静音
	_mute = false;
	get mute() {
		return this._mute;
	}
	set mute(mute) {
		this._mute = mute;
	}
	//设置音量
	set volume(v = 0) {
		//TODO
	}
	get volume() {
		return; //TODO
	}
	Set(url) {
		return new Promise((resolve, reject) => {
			//TODO audio 接口附加
			let audio = wx.createInnerAudioContext();
			audio.loop = false;
			audio.autoplay = false;
			audio.onCanplay(function() {
				resolve(audio);
			});
			audio.onError(function(e) {
				reject(e);
			});
			audio.src = url;
		});
	}
}
