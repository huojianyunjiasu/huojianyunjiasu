module.exports = {
    title: '帮助中心',
    description: 'Just playing around',
    themeConfig: {
      sidebar: [
        '/',
        '/Category_1/',
        {
          title: 'Category2_nest',
          path: '/Category_2/',
          children: [
            '/Category_2/test1.md',
            '/Category_2/test2.md',
          ]
        }
      ]
    }
  }