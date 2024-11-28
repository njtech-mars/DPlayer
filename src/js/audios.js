import utils from './utils';

class Audios {
    /**@param {{video:HTMLVideoElement}} player  */
    constructor(player) {
        this.player = player;
        this.player.template.mask.addEventListener('click', () => {
            this.hide();
        });
        this.player.template.audiosButton.addEventListener('click', () => {
            this.adaptiveHeight();
            this.show();
        });

        // on timeupdate, sync time
        this.player.video.addEventListener('timeupdate', () => {
            const currentAudio = this.player.template.audioElements[this.player.options.audio.index];
            if (currentAudio) {
                const diff = currentAudio.currentTime - this.player.video.currentTime;

                if (Math.abs(diff) > 0.3) {
                    currentAudio.currentTime = this.player.video.currentTime;
                }
            }
        });
        this.player.video.addEventListener('play', async () => {
            const currentAudio = this.player.template.audioElements[this.player.options.audio.index];
            if (currentAudio) {
                if (currentAudio.paused) {
                    await currentAudio.play();
                }
                await this.sync_current_from_video();
            }
        });
        this.player.video.addEventListener('pause', async () => {
            const currentAudio = this.player.template.audioElements[this.player.options.audio.index];
            if (currentAudio) {
                if (!currentAudio.paused) {
                    await currentAudio.pause();
                }
                await this.sync_current_from_video();
            }
        });
        this.player.video.addEventListener('ratechange', async () => {
            await this.sync_current_from_video();
        });

        const lastItemIndex = this.player.template.audiosItem.length - 1;
        for (let i = 0; i < lastItemIndex; i++) {
            this.player.template.audiosItem[i].addEventListener('click', async () => {
                this.hide();
                if (this.player.options.audio.index !== i) {
                    this.player.options.audio.index = i;
                    const currentAudio = this.player.template.audioElements[this.player.options.audio.index];
                    // stop all other audio playing
                    this.player.template.audioElements.forEach(async (audio, j) => {
                        if (j !== i) {
                            await audio.pause();
                        }
                    });
                    // play or pause?
                    if (this.player.video.paused && !currentAudio.paused) {
                        await currentAudio.pause();
                    } else if (!this.player.video.paused && currentAudio.paused) {
                        await currentAudio.play();
                    }
                    await this.sync_current_from_video();
                }
            });
        }
        this.player.template.audiosItem[lastItemIndex].addEventListener('click', () => {
            this.hide();
            if (this.player.options.audio.index !== lastItemIndex) {
                this.player.options.audio.index = lastItemIndex;
                // stop all other audio playing
                this.player.template.audioElements.forEach(async (audio) => {
                    await audio.pause();
                });
                // unmute video
                this.player.video.muted = false;
            }
        });
    }

    setVolume(percentage) {
        const currentAudio = this.player.template.audioElements[this.player.options.audio.index];
        if (currentAudio) {
            currentAudio.volume = percentage;
        } else {
            this.player.video.volume = percentage;
        }
    }

    hide() {
        this.player.template.audiosBox.classList.remove('dplayer-audios-box-open');
        this.player.template.mask.classList.remove('dplayer-mask-show');
        this.player.controller.disableAutoHide = false;
    }

    show() {
        this.player.template.audiosBox.classList.add('dplayer-audios-box-open');
        this.player.template.mask.classList.add('dplayer-mask-show');
        this.player.controller.disableAutoHide = true;
    }

    adaptiveHeight() {
        const curBoxHeight = this.player.template.audiosItem.length * 30 + 14;
        const stdMaxHeight = this.player.template.videoWrap.offsetHeight * 0.8;
        if (curBoxHeight >= stdMaxHeight - 50) {
            this.player.template.audiosBox.style.bottom = '8px';
            this.player.template.audiosBox.style['max-height'] = stdMaxHeight - 8 + 'px';
        } else {
            this.player.template.audiosBox.style.bottom = '50px';
            this.player.template.audiosBox.style['max-height'] = stdMaxHeight - 50 + 'px';
        }
    }

    async sync_current_from_video() {
        const currentAudio = this.player.template.audioElements[this.player.options.audio.index];
        if (currentAudio) {
            // time
            currentAudio.currentTime = this.player.video.currentTime;
            // rate
            currentAudio.playbackRate = this.player.video.playbackRate;
            // volume
            this.volume = this.player.video.volume;
            this.player.video.muted = true;
            currentAudio.volume = this.volume;
        }
    }
}

export default Audios;
