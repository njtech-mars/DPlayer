class HotKey {
    constructor(player) {
        this.player = player;
        this.doHotKeyHandler = this.doHotKey.bind(this);
        this.cancelFullScreenHandler = this.cancelFullScreen.bind(this);
        this.longPressTimer = null;
        this.isLongPressActive = false;
        this.isKeyDown = false;

        if (this.player.options.hotkey) {
            document.addEventListener('keydown', this.doHotKeyHandler);
            document.addEventListener('keyup', this.stopLongPress.bind(this));
        }

        document.addEventListener('keydown', this.cancelFullScreenHandler);
    }

    doHotKey(e) {
        if (this.player.focus) {
            const tag = document.activeElement.tagName.toUpperCase();
            const editable = document.activeElement.getAttribute('contenteditable');
            if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
                const event = e || window.event;
                let percentage;

                switch (event.keyCode) {
                    case 32:
                        event.preventDefault();
                        this.player.toggle();
                        break;
                    case 37:
                        event.preventDefault();
                        if (!this.player.options.live) {
                            this.player.seek(this.player.video.currentTime - 5);
                        }
                        this.player.controller.setAutoHide();
                        break;
                    case 39:
                        event.preventDefault();
                        if (!this.player.options.live) {
                            this.startRightArrowPress();
                        }
                        this.player.controller.setAutoHide();
                        break;
                    case 38:
                        event.preventDefault();
                        percentage = this.player.volume() + 0.1;
                        this.player.volume(percentage);
                        break;
                    case 40:
                        event.preventDefault();
                        percentage = this.player.volume() - 0.1;
                        this.player.volume(percentage);
                        break;
                }
            }
        }
    }

    startRightArrowPress() {
        if (this.isKeyDown) return;
        this.isKeyDown = true;

        this.longPressTimer = setTimeout(() => {
            this.isLongPressActive = true;
            this.player.speed(2);
            this.player.notice(this.player.tran('▶▶倍速播放中').replace('%s', 2));
        }, 500); //阈值
    }

    stopLongPress(e) {
        if (e.keyCode === 39) {
            clearTimeout(this.longPressTimer);

            if (this.isLongPressActive) {
                this.player.speed(1);
            } else {
                this.player.seek(this.player.video.currentTime + 5);
            }

            this.isLongPressActive = false;
            this.isKeyDown = false;
        }
    }

    cancelFullScreen(e) {
        if (e.keyCode === 27 && this.player.fullScreen.isFullScreen('web')) {
            this.player.fullScreen.cancel('web');
        }
    }

    destroy() {
        if (this.player.options.hotkey) {
            document.removeEventListener('keydown', this.doHotKeyHandler);
            document.removeEventListener('keyup', this.stopLongPress.bind(this));
        }
        document.removeEventListener('keydown', this.cancelFullScreenHandler);
    }
}

export default HotKey;
