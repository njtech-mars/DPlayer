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
        video: {
            url: 'https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/10.mp4',
        },
        episodes: [
            {
              "id": "66d0731a997ebcc654a0bfd4",
              "index": 1,
              "title": "第1集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/1.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfd5",
              "index": 2,
              "title": "第2集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/2.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfd6",
              "index": 3,
              "title": "第3集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/3.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfd7",
              "index": 4,
              "title": "第4集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/4.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfd8",
              "index": 5,
              "title": "第5集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/5.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfd9",
              "index": 6,
              "title": "第6集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/6.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfda",
              "index": 7,
              "title": "第7集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/7.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfdb",
              "index": 8,
              "title": "第8集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/8.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfdc",
              "index": 9,
              "title": "第9集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/9.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfdd",
              "index": 10,
              "title": "第10集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/10.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfde",
              "index": 11,
              "title": "第11集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/11.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfdf",
              "index": 12,
              "title": "第12集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/12.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfe0",
              "index": 13,
              "title": "第13集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/13.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfe1",
              "index": 14,
              "title": "第14集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/14.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfe2",
              "index": 15,
              "title": "第15集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/15.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfe3",
              "index": 16,
              "title": "第16集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/16.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfe4",
              "index": 17,
              "title": "第17集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/19.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfe5",
              "index": 18,
              "title": "第18集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/20.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfe6",
              "index": 19,
              "title": "第19集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/21.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfe7",
              "index": 20,
              "title": "第20集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/22.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfe8",
              "index": 21,
              "title": "第21集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/23.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfe9",
              "index": 22,
              "title": "第22集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/24.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfea",
              "index": 23,
              "title": "第23集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/25.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfeb",
              "index": 24,
              "title": "第24集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/26.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfec",
              "index": 25,
              "title": "第25集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/27.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfed",
              "index": 26,
              "title": "第26集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/28.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfee",
              "index": 27,
              "title": "第27集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/29.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfef",
              "index": 28,
              "title": "第28集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/30.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bff0",
              "index": 29,
              "title": "第29集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/31.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bff1",
              "index": 30,
              "title": "第30集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/32.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bff2",
              "index": 31,
              "title": "第31集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/33.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bff3",
              "index": 32,
              "title": "第32集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/34.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bff4",
              "index": 33,
              "title": "第33集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/35.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bff5",
              "index": 34,
              "title": "第34集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/36.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bff6",
              "index": 35,
              "title": "第35集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/37.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bff7",
              "index": 36,
              "title": "第36集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/38.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bff8",
              "index": 37,
              "title": "第37集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/39.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bff9",
              "index": 38,
              "title": "第38集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/40.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bffa",
              "index": 39,
              "title": "第39集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/41.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bffb",
              "index": 40,
              "title": "第40集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/42.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bffc",
              "index": 41,
              "title": "第41集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/43.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bffd",
              "index": 42,
              "title": "第42集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/44.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bffe",
              "index": 43,
              "title": "第43集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/45.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0bfff",
              "index": 44,
              "title": "第44集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/46.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c000",
              "index": 45,
              "title": "第45集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/47.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c001",
              "index": 46,
              "title": "第46集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/48.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c002",
              "index": 47,
              "title": "第47集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/49.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c003",
              "index": 48,
              "title": "第48集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/50.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c004",
              "index": 49,
              "title": "第49集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/51.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c005",
              "index": 50,
              "title": "第50集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/52.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c006",
              "index": 51,
              "title": "第51集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/53.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c007",
              "index": 52,
              "title": "第52集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/54.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c008",
              "index": 53,
              "title": "第53集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/55.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c009",
              "index": 54,
              "title": "第54集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/56.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c00a",
              "index": 55,
              "title": "第55集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/57.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c00b",
              "index": 56,
              "title": "第56集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/58.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c00c",
              "index": 57,
              "title": "第57集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/59.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c00d",
              "index": 58,
              "title": "第58集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/60.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c00e",
              "index": 59,
              "title": "第59集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/61.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c00f",
              "index": 60,
              "title": "第60集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/62.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c010",
              "index": 61,
              "title": "第61集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/63.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c011",
              "index": 62,
              "title": "第62集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/64.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c012",
              "index": 63,
              "title": "第63集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/65.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c013",
              "index": 64,
              "title": "第64集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/66.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c014",
              "index": 65,
              "title": "第65集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/67.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c015",
              "index": 66,
              "title": "第66集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/68.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c016",
              "index": 67,
              "title": "第67集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/69.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c017",
              "index": 68,
              "title": "第68集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/70.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c018",
              "index": 69,
              "title": "第69集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/71.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c019",
              "index": 70,
              "title": "第70集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/72.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c01a",
              "index": 71,
              "title": "第71集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/73.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c01b",
              "index": 72,
              "title": "第72集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/74.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c01c",
              "index": 73,
              "title": "第73集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/75.mp4"
            },
            {
              "id": "66d0731a997ebcc654a0c01d",
              "index": 74,
              "title": "第74集",
              "url": "https://data2online.njtech.edu.cn/online-2020-2/2023-12-26/甄嬛传/76.mp4"
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