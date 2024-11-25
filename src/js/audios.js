class Audios {
    constructor(player) {
        this.player = player;

        this.player.template.mask.addEventListener('click', () => {
            this.hide();
        });
        this.player.template.audiosButton.addEventListener('click', () => {
            this.adaptiveHeight();
            this.show();
        });

        const lastItemIndex = this.player.template.audiosItem.length - 1;
        for (let i = 0; i < lastItemIndex; i++) {
            this.player.template.audiosItem[i].addEventListener('click', () => {
                this.hide();
                if (this.player.options.audio.index !== i) {
                    // clear audio show for new audio don't have now duration time. If don't, will display last audio.
                    this.player.template.audio.innerHTML = `<p></p>`;
                    // update video track src
                    this.player.template.subtrack.src = this.player.template.audiosItem[i].dataset.audio;
                    // update options current subindex for reload (such as changeQuality)
                    this.player.options.audio.index = i;
                    if (this.player.template.audio.classList.contains('dplayer-audio-hide')) {
                        this.subContainerShow();
                    }
                }
            });
        }
        this.player.template.audiosItem[lastItemIndex].addEventListener('click', () => {
            this.hide();
            if (this.player.options.audio.index !== lastItemIndex) {
                // clear audio show for new audio don't have now duration time. If don't, will display last audio.
                this.player.template.audio.innerHTML = `<p></p>`;
                // update video track src
                this.player.template.subtrack.src = '';
                // update options current subindex for reload (such as changeQuality)
                this.player.options.audio.index = lastItemIndex;
                this.subContainerHide();
            }
        });
    }

    subContainerShow() {
        this.player.template.audio.classList.remove('dplayer-audio-hide');
        this.player.events.trigger('audio_show');
    }

    subContainerHide() {
        this.player.template.audio.classList.add('dplayer-audio-hide');
        this.player.events.trigger('audio_hide');
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
}

export default Audios;
