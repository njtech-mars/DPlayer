export default class Episodes {
    constructor(player) {
        this.player = player;
        this.container = player.container;
        this.currentEpisodeIndex = 0;
        this.init();
    }

    init() {
        this.episodesButton = this.container.querySelector('.dplayer-episodes-icon');
        this.episodesBox = this.container.querySelector('.dplayer-episodes-box');
        this.episodesItems = this.container.querySelectorAll('.dplayer-episodes-item');

        if (this.episodesButton && this.episodesBox && this.episodesItems) {
            this.bindEvents();
            this.updateCurrentEpisodeStyle();
        }
    }

    bindEvents() {
        this.episodesButton.addEventListener('click', (e) => {
            e.stopPropagation();
            this.episodesBox.classList.toggle('dplayer-episodes-box-show');
        });

        this.episodesItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                const episodeUrl = item.getAttribute('data-episode');
                this.player.switchVideo({ url: episodeUrl });
                this.episodesBox.classList.remove('dplayer-episodes-box-show');

                this.currentEpisodeIndex = index;
                this.updateCurrentEpisodeStyle();

                this.player.play();
            });
        });

        document.addEventListener('click', () => {
            this.episodesBox.classList.remove('dplayer-episodes-box-show');
        });
    }

    updateCurrentEpisodeStyle() {
        this.episodesItems.forEach((item, index) => {
            if (index === this.currentEpisodeIndex) {
                item.classList.add('dplayer-episodes-item-current');
            } else {
                item.classList.remove('dplayer-episodes-item-current');
            }
        });
    }
}
