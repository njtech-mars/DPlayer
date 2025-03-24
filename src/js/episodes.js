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

    async fetchEpisodeUrl(episodeId) {
        try {
            const response = await fetch(`/api/v2/video_episodes/${episodeId}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json, application/problem+json',
                    Authorization: `Bearer ${this.player.options.marsToken}`,
                },
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error(`请求失败: ${response.status}`);
            }

            const data = await response.json();
            return data.url;
        } catch (error) {
            console.error('获取视频地址失败:', error);
            throw error;
        }
    }

    bindEvents() {
        this.episodesButton.addEventListener('click', (e) => {
            e.stopPropagation();
            this.episodesBox.classList.toggle('dplayer-episodes-box-show');
        });

        this.episodesItems.forEach((item, index) => {
            item.addEventListener('click', async () => {
                const episodeId = item.dataset.episodeId;
                if (!episodeId) return;

                try {
                    const videoUrl = await this.fetchEpisodeUrl(episodeId);

                    this.player.switchVideo({
                        url: videoUrl,
                    });

                    this.currentEpisodeIndex = index;
                    this.updateCurrentEpisodeStyle();

                    this.player.play();
                } catch (error) {
                    console.error('切换剧集失败:', error);
                } finally {
                    this.episodesBox.classList.remove('dplayer-episodes-box-show');
                }
            });
        });

        document.addEventListener('click', () => {
            this.episodesBox.classList.remove('dplayer-episodes-box-show');
        });
    }

    updateCurrentEpisodeStyle() {
        this.episodesItems.forEach((item, index) => {
            item.classList.toggle('dplayer-episodes-item-current', index === this.currentEpisodeIndex);
        });
    }
}
