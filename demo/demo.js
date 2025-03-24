// stats.js: JavaScript Performance Monitor
// const stats = new Stats();
// stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
// document.body.appendChild(stats.dom);
function animate() {
    // stats.begin();
    // monitored code goes here
    // stats.end();

    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

initPlayers();
handleEvent();

function handleEvent() {
    document.getElementById('dplayer-dialog').addEventListener('click', (e) => {
        const $clickDom = e.currentTarget;
        const isShowStatus = $clickDom.getAttribute('data-show');

        if (isShowStatus) {
            document.getElementById('float-dplayer').style.display = 'none';
        } else {
            $clickDom.setAttribute('data-show', 1);
            document.getElementById('float-dplayer').style.display = 'block';
        }
    });

    document.getElementById('close-dialog').addEventListener('click', () => {
        const $openDialogBtnDom = document.getElementById('dplayer-dialog');

        $openDialogBtnDom.setAttribute('data-show', '');
        document.getElementById('float-dplayer').style.display = 'none';
    });
}

function initPlayers() {
    // dp1
    window.dp1 = new DPlayer({
        container: document.getElementById('dplayer1'),
        autoplay: true,
        preload: 'none',
        // screenshot: true,
        marsToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiTkpURUNIIl0sImV4cCI6Mzg4MDQ1NjI3MiwiaWF0IjoxNzMyOTcyNjI1LCJpc3MiOiJNQVJTIiwicmxlIjoiYWRtaW4iLCJzdWIiOiIyMDIyMjEwMTkwODEiLCJ1aWQiOiI2NmQwNzJmNzk5N2ViY2M2NTRhMDJjMDcifQ.LZ7EjuEFc_EozjHZbnD9jjOLiY9g9TsB8T_ZqORWXAQ",
        video: {
            url: 'https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/10.mp4',
        },
        episodes: [
            {
              "id": "66d0731a997ebcc654a0bfd4",
              "index": 1,
              "title": "第1集",
            },
            {
              "id": "66d0731a997ebcc654a0bfd5",
              "index": 2,
              "title": "第2集",
            },
            {
              "id": "66d0731a997ebcc654a0bfd6",
              "index": 3,
              "title": "第3集",
            },
            {
              "id": "66d0731a997ebcc654a0bfd7",
              "index": 4,
              "title": "第4集",
            },
            {
              "id": "66d0731a997ebcc654a0bfd8",
              "index": 5,
              "title": "第5集",
            },
            {
              "id": "66d0731a997ebcc654a0bfd9",
              "index": 6,
              "title": "第6集",
            },
            {
              "id": "66d0731a997ebcc654a0bfda",
              "index": 7,
              "title": "第7集",
            },
            {
              "id": "66d0731a997ebcc654a0bfdb",
              "index": 8,
              "title": "第8集",
            },
            {
              "id": "66d0731a997ebcc654a0bfdc",
              "index": 9,
              "title": "第9集",
            }
          ]
        // subtitle: {
        //     tracks: [
        //         {
        //             url: 'https://data2online.njtech.edu.cn/media/movie/%E5%A4%96%E8%AF%AD%E7%94%B5%E5%BD%B1/2018/%E7%8E%AF%E5%A4%AA%E5%B9%B3%E6%B4%8B%EF%BC%9A%E9%9B%B7%E9%9C%86%E5%86%8D%E8%B5%B7%20(2018)/%E7%8E%AF%E5%A4%AA%E5%B9%B3%E6%B4%8B%EF%BC%9A%E9%9B%B7%E9%9C%86%E5%86%8D%E8%B5%B7%20(2018)%20-%201080p%20-%20BluRay%20-%20X264%20-%20AC3_extracted_subtitle_from_stream_2.vtt',
        //             name: 'CHS',
        //         },
        //         {
        //             url: 'https://data2online.njtech.edu.cn/media/movie/%E5%A4%96%E8%AF%AD%E7%94%B5%E5%BD%B1/2018/%E7%8E%AF%E5%A4%AA%E5%B9%B3%E6%B4%8B%EF%BC%9A%E9%9B%B7%E9%9C%86%E5%86%8D%E8%B5%B7%20(2018)/%E7%8E%AF%E5%A4%AA%E5%B9%B3%E6%B4%8B%EF%BC%9A%E9%9B%B7%E9%9C%86%E5%86%8D%E8%B5%B7%20(2018)%20-%201080p%20-%20BluRay%20-%20X264%20-%20AC3_extracted_subtitle_from_stream_3.vtt',
        //             name: 'CHT',
        //         },
        //     ],
        //     type: 'webvtt',
        //     fontSize: '2vw',
        //     bottom: '10%',
        //     color: '#6677cc'
        // },
        // audio: {
        //     tracks: [
        //         {
        //             url: 'https://data2online.njtech.edu.cn/media/movie/%E5%A4%96%E8%AF%AD%E7%94%B5%E5%BD%B1/2018/%E7%8E%AF%E5%A4%AA%E5%B9%B3%E6%B4%8B%EF%BC%9A%E9%9B%B7%E9%9C%86%E5%86%8D%E8%B5%B7%20(2018)/%E7%8E%AF%E5%A4%AA%E5%B9%B3%E6%B4%8B%EF%BC%9A%E9%9B%B7%E9%9C%86%E5%86%8D%E8%B5%B7%20(2018)%20-%201080p%20-%20BluRay%20-%20X264%20-%20AC3_transcoded_audio_from_stream_1.mp3',
        //             name: 'English',
        //         },
        //     ],
        //     defdefaultAudio: 0 // 自动选择第一个音轨
        // },
        // video: {
        //     url: 'https://data2online.njtech.edu.cn/media/movie/动画电影/2023/你想活出怎样的人生 (2023)/你想活出怎样的人生 (2023) - 1080p - WEB-DL - H264 - DDP 5.1 Atmos.mkv',
        //     pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
        //     thumbnails: 'https://i.loli.net/2019/06/06/5cf8c5d9cec8510758.jpg'
        // },
        // subtitle: {
        //     tracks: [
        //         {
        //             url: 'https://data2online.njtech.edu.cn/media/movie/%E5%8A%A8%E7%94%BB%E7%94%B5%E5%BD%B1/2023/%E4%BD%A0%E6%83%B3%E6%B4%BB%E5%87%BA%E6%80%8E%E6%A0%B7%E7%9A%84%E4%BA%BA%E7%94%9F%20(2023)/extracted_subtitle_from_stream_3.vtt',
        //             name: 'eng',
        //         },
        //         {
        //             url: 'https://data2online.njtech.edu.cn/media/movie/%E5%8A%A8%E7%94%BB%E7%94%B5%E5%BD%B1/2023/%E4%BD%A0%E6%83%B3%E6%B4%BB%E5%87%BA%E6%80%8E%E6%A0%B7%E7%9A%84%E4%BA%BA%E7%94%9F%20(2023)/extracted_subtitle_from_stream_4.vtt',
        //             name: 'eng(forced)',
        //         },
        //     ],
        //     type: 'webvtt',
        //     fontSize: '25px',
        //     bottom: '10%',
        //     color: '#6677cc'
        // },
        // audio: {
        //     tracks: [
        //         {
        //             url: 'https://data2online.njtech.edu.cn/media/movie/%E5%8A%A8%E7%94%BB%E7%94%B5%E5%BD%B1/2023/%E4%BD%A0%E6%83%B3%E6%B4%BB%E5%87%BA%E6%80%8E%E6%A0%B7%E7%9A%84%E4%BA%BA%E7%94%9F%20(2023)/transcoded_audio_from_stream_1.aac',
        //             name: 'English',
        //         },
        //         {
        //             url: 'https://data2online.njtech.edu.cn/media/movie/%E5%8A%A8%E7%94%BB%E7%94%B5%E5%BD%B1/2023/%E4%BD%A0%E6%83%B3%E6%B4%BB%E5%87%BA%E6%80%8E%E6%A0%B7%E7%9A%84%E4%BA%BA%E7%94%9F%20(2023)/transcoded_audio_from_stream_2.aac',
        //             name: 'Japanese',
        //         },
        //     ],
        // },
        // danmaku: {
        //     id: '9E2E3368B56CDBB4',
        //     api: 'https://api.prprpr.me/dplayer/',
        //     addition: ['https://s-sh-17-dplayercdn.oss.dogecdn.com/1678963.json']
        // }
    });

    const events = [
        'abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error',
        'loadeddata', 'loadedmetadata', 'loadstart', 'mozaudioavailable', 'pause', 'play',
        'playing', 'ratechange', 'seeked', 'seeking', 'stalled',
        'volumechange', 'waiting',
        'screenshot',
        'thumbnails_show', 'thumbnails_hide',
        'danmaku_show', 'danmaku_hide', 'danmaku_clear',
        'danmaku_loaded', 'danmaku_send', 'danmaku_opacity',
        'contextmenu_show', 'contextmenu_hide',
        'notice_show', 'notice_hide',
        'quality_start', 'quality_end',
        'destroy',
        'resize',
        'fullscreen', 'fullscreen_cancel', 'webfullscreen', 'webfullscreen_cancel',
        'subtitle_show', 'subtitle_hide', 'subtitle_change'
    ];
    const eventsEle = document.getElementById('events');
    for (let i = 0; i < events.length; i++) {
        dp2.on(events[i], (info) => {
            eventsEle.innerHTML += `<p>Event: ${events[i]} ${info ? `Data: <span>${JSON.stringify(info)}</span>` : ''}</p>`;
            eventsEle.scrollTop = eventsEle.scrollHeight;
        });
    }

    // dp3
    // window.dp3 = new DPlayer({
    //     container: document.getElementById('dplayer3'),
    //     preload: 'none',
    //     video: {
    //         quality: [{
    //             name: 'HD',
    //             url: 'https://s-sh-17-dplayercdn.oss.dogecdn.com/hikarunara.m3u8',
    //             type: 'hls'
    //         }, {
    //             name: 'SD',
    //             url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
    //             type: 'normal'
    //         }],
    //         defaultQuality: 0,
    //         pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png'
    //     }
    // });

    // // dp4
    // window.dp4 = new DPlayer({
    //     container: document.getElementById('dplayer4'),
    //     preload: 'none',
    //     video: {
    //         url: 'https://s-sh-17-dplayercdn.oss.dogecdn.com/hikarunara.m3u8',
    //         type: 'hls'
    //     }
    // });

    // // dp5
    // window.dp5 = new DPlayer({
    //     container: document.getElementById('dplayer5'),
    //     preload: 'none',
    //     video: {
    //         url: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.flv',
    //         type: 'flv'
    //     }
    // });

    // window.dp8 = new DPlayer({
    //     container: document.getElementById('dplayer8'),
    //     preload: 'none',
    //     video: {
    //         url: 'https://moeplayer.b0.upaiyun.com/dplayer/dash/hikarunara.mpd',
    //         type: 'dash'
    //     }
    // });

    // window.dp9 = new DPlayer({
    //     container: document.getElementById('dplayer9'),
    //     video: {
    //         url: 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent',
    //         type: 'webtorrent'
    //     }
    // });

    // window.dp6 = new DPlayer({
    //     container: document.getElementById('dplayer6'),
    //     preload: 'none',
    //     live: true,
    //     danmaku: true,
    //     apiBackend: {
    //         read: function (endpoint, callback) {
    //             console.log('假装 WebSocket 连接成功');
    //             callback();
    //         },
    //         send: function (endpoint, danmakuData, callback) {
    //             console.log('假装通过 WebSocket 发送数据', danmakuData);
    //             callback();
    //         }
    //     },
    //     video: {
    //         url: 'https://s-sh-17-dplayercdn.oss.dogecdn.com/hikarunara.m3u8',
    //         type: 'hls'
    //     }
    // });

    // window.dp10 = new DPlayer({
    //     container: document.getElementById('dplayer10'),
    //     video: {
    //         url: 'https://qq.webrtc.win/tv/Pear-Demo-Yosemite_National_Park.mp4',
    //         type: 'pearplayer',
    //         customType: {
    //             'pearplayer': function (video, player) {
    //                 new PearPlayer(video, {
    //                     src: video.src,
    //                     autoplay: player.options.autoplay
    //                 });
    //             }
    //         }
    //     }
    // });
}

function clearPlayers() {
    for (let i = 0; i < 6; i++) {
        window['dp' + (i + 1)].pause();
        document.getElementById('dplayer' + (i + 1)).innerHTML = '';
    }
}

function switchDPlayer() {
    if (dp2.options.danmaku.id !== '5rGf5Y2X55qu6Z2p') {
        dp2.switchVideo({
            url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
            pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
            type: 'auto',
        }, {
            id: '5rGf5Y2X55qu6Z2p',
            api: 'https://api.prprpr.me/dplayer/',
            maximum: 3000,
            user: 'DIYgod'
        });
    } else {
        dp2.switchVideo({
            url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
            pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
            thumbnails: 'https://i.loli.net/2019/06/06/5cf8c5d9cec8510758.jpg',
            type: 'auto'
        }, {
            id: '9E2E3368B56CDBB42',
            api: 'https://api.prprpr.me/dplayer/',
            maximum: 3000,
            user: 'DIYgod'
        });
    }
}