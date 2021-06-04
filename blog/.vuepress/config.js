module.exports = {
  "title": "Jara's blog",
  "description": "一个栖息的小窝",
  "dest": "public",
  "base": "/blog/",
  "head": [
    [
      "script",
      {
        "language": "javascript",
        "type": "text/javascript",
        "src": "/js/MouseClickEffect.js" // 引入鼠标点击脚本
      },
      "script",
      {
        "language": "javascript",
        "type": "text/javascript",
        "src": "https://cdn.jsdelivr.net/npm/vue/dist/vue.js"
      },
      "script",
      {
        "language": "javascript",
        "type": "text/javascript",
        "src": "/js/TypingWordsEffect.js" // 引入鼠标点击脚本
      },
      // <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    ],

    // ["script", { src: "/js/jquery-1.11.3.min.js" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "/css/style.css",
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "href": "/favi.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],

  "theme": "reco",

  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "这是时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系我叭",
        "icon": "reco-message",
        "items": [
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/weixin_43720253",
            "icon": "reco-csdn"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/huangjianhua567",
            "icon": "reco-github"
          },

        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "正准备写点什么"
      },
      "tag": {
        "location": 3,
        "text": "标签分类"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Jara Wong",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2021"
  },

  "markdown": {
    "lineNumbers": true
  },


  plugins: [

    [
      // npm install vuepress-plugin-ribbon-animation -D
      "ribbon-animation", {
        size: 90,   // 默认数据
        opacity: 0.3,  //  透明度
        zIndex: -1,   //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: "80%",
          // 色带HSL亮度量
          colorBrightness: "60%",
          // 带状颜色不透明度
          colorAlpha: 0.45,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 4,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: "center",
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true  // 滑动彩带
      }
    ],
    [
      // npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        // theme: ['whiteCat', 'blackCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        theme: ['whiteCat'],
        clean: true,
        opacity: '1',
        messages: {
          welcome: '我是lookroot欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          // theme: '好吧，希望你能喜欢我的其他小伙伴。',
          // close: '再见噢'
        },
        width: 200,
        height: 300
      }
    ],
    [
      // yarn add vuepress-plugin-comment -D
      'vuepress-plugin-comment',
      {
        choosen: 'valine',
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: '1Ff2HS7f67BeOfGxHLuefAx9-gzGzoHsz',
          appKey: 'YoDtwmN7OPfzVeh2HaDbTUUR',
          placeholder: '兄dei，baba两句叭',
          // serverURLs:  http[s]://[tab/us].avoscloud.com
          // 设置Bilibili表情包地址
          // emojiCDN: '//i0.hdslb.com/bfs/emote/'
          emojiCDN: 'https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/'

        }
      }
    ],
    // yarn add vuepress-plugin-meting
    ['meting', {
      // metingApi: "http://music.163.com/playlist?id=417639577&userid=301312374",
      meting: {
        server: "netease",
        type: "playlist",
        mid: "6784944813",
        auto: "https://music.163.com/#/playlist?id=6784944813",

      },
      // 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: true,
        mini: true,
        // 自动播放
        autoplay: true,
        // 歌曲栏折叠
        listFolded: true,
        // 颜色
        theme: '#f9bcdd',
        // 播放顺序为随机
        order: 'random',
        // 初始音量
        volume: 0.3,
        // 关闭歌词显示
        lrcType: 0
      },
      mobile: {
        // 手机端去掉cover图
        cover: false,
      }
    }
    ],

  ]

}