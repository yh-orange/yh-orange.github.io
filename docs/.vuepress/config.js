module.exports = {
    title: 'vue express dome',
    description: 'dome',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '告鸟 dome',
                items: [
                    { text: 'Github', link: 'https://github.com/yh-orange' },
                    { text: '掘金', link: 'https://juejin.cn' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: true, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: true, // 不折叠
                children: [
                    { title: "条件类型", path: "/handbook/ConditionalTypes" },
                    { title: "泛型", path: "/handbook/Generics" }
                ],
            }
        ]
    }
}