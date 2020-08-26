const moment = require('moment');
// const nav = require('./nav')

module.exports = {
  //seo优化
  title: '嘉炳的笔记',
  description: '仅做生活学习的记录',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { rel: 'author', content: 'Jiabing' }],
    ['meta', { rel: 'keywords', content: 'Jiabing,嘉炳,夹饼,生活,学习，记录,前端' }],
  ],
  //base githubpage部署
  base: "/docs/",
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          // const moment = require('moment')
          // moment.locale(lang)(多语言模式、记得上面加lang参数)
          moment.locale("zh-cn")
          return moment(timestamp).format("LLLL")
        }
      },

    ],
    [
      "vuepress-plugin-auto-sidebar", {
        sidebarDepth: 1
        //生成nav ，我觉得不好用，可能我不会用吧
        // nav: true
      },
    ],
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: 'img',
        // delay: 1000,
        options: {
          // margin: 24,
          // background: '#3eaf74',
          // scrollOffset: 0,
        },
      },
    ],
  ],
  themeConfig: {
    //导航栏插件，生成的不太满意
    // nav: nav,
    //最后更新时间
    lastUpdated: '更新时间', // string | boolean
    //导航栏 Logo 公共文件public中
    logo: '/assets/img/logo.png',
    //导航栏链接==========
    nav: [
      //空，首页跳转
      { text: '首页', link: '/' },
      //路由跳转
      { text: '先导', link: '/guide' },
      //一级分组
      {
        text: '计算机',
        ariaLabel: 'Language Menu',
        items: [
          { text: '组成原理', link: '/计算机/组成原理/' },
          { text: '操作系统', link: '/计算机/操作系统/' },
          { text: '网络协议', link: '/计算机/网络协议/HTTP协议原理+实践.md' },
          { text: '数据结构与算法', link: '/计算机/数据结构与算法/' },
          { text: '设计模式', link: '/计算机/设计模式/' },
        ]
      },
      //外部链接，原页面跳转
      // { text: 'External', link: 'https://google.com', target: '_self', rel: '' },
      //内部链接，新页面跳转
      // { text: 'Guide', link: '/guide/', target: '_blank' },
      //一级分组
      {
        text: '前端',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'HTML', link: '/H5C3JS/HTML/' },
          { text: 'CSS', link: '/H5C3JS/CSS/' },
          { text: 'JavaScript', link: '/H5C3JS/JavaScript/' },
          { text: 'Vue', link: '/H5C3JS/vue/' },
        ]
      },
      //一级分组
      {
        text: '后端',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      //一级分组
      {
        text: '工具',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Markdown', link: '/工具/Markdown/' },
          { text: 'Webpack', link: '/工具/Webpack/' },
          { text: 'git', link: '/工具/git/' }
        ]
      },
      //二级分组
      {
        text: '更多',
        items: [
          { text: '关于我的', link: '/about' },
          {
            text: 'Group1', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/guide/' },
            ]
          },
          {
            text: 'Group2', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/guide/' },
            ]
          }
        ]
      },
      //外部链接，新页面跳转
      { text: 'GitHub', link: 'https://github.com/jiabing-china' },
    ],
    //导航栏链接==========
    // sidebar: 'auto' 自动生成
    //数据（个人介绍）或者对象（博客）
    // sidebar: {
    //   '/HTML/': [
    //     'html',
    //   ],
    //   '/CSS/': [
    //     'c-aaa',
    //     'c-bbb',
    //     'c-ccc',
    //   ],
    //   '/JavaScript/': [
    //     'j-aaa',
    //     'j-bbb',
    //     'j-ccc',
    //   ]
    // },
    //上下篇的链接
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    // nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    // prevLinks: true
  }
}