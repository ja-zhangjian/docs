module.exports = {
  themeConfig: {
    //更新时间
    lastUpdated: 'Last Updated',
    //导航栏的logo，要放在静态资源public中（自己新建文件夹）
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      {
        text: 'Languages',
        items: [
          {
            text: 'Group1', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/guide/' }
            ]
          },
          {
            text: 'Group2', items: [
              { text: 'Home2', link: '/' },
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/guide/' }
            ]
          }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    // sidebar: 'auto' 自动生成
    //数据（个人介绍）或者对象（博客）
    sidebar: {
      '/css/': [
        'c-aaa',
        'c-bbb',
        'c-ccc',
      ],
      '/javascript/': [
        'j-aaa',
        'j-bbb',
        'j-ccc',
      ]
    },

    //上下篇的链接
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false
  }
}