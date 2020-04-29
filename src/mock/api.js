import Mock from 'mockjs'

Mock.mock('/api/user/login', {
  status: 0,
  'data|10': [{
    'id|10000-11000': 0,
    username: '@cname',
    email: '@email',
    phone: /^1[385][1-9]\d{8}/,
    role: 0,
    createTime: 1479048325000,
    updateTime: 1479048365000
  }]
})
