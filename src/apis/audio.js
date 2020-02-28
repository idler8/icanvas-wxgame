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
class InnerAudio {
	constructor() {
		this.audio = wx.createInnerAudioContext();
	}
	play() {}
	pause() {}
	stop(){}
	mute(){}
	volume(){}
	fade(){}
	rate(){}
	seek(){}
	loop(){}
	
}
export default class Audio {
	load(url) {
		return new Promise((resolve, reject) => {
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
	mute(mute) {
		return;
	}
	volume(v) {
		return;
	}
}
