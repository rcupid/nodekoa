const Sequelize = require('sequelize')
const { sequelize } = require('../../core/db')

class User extends Sequelize.Model { }

// 主键  关系型数据库
// 主键  不能重复，不能为空
// 注册 User id 
// 自动增长
// 并发 1000[p]
User.init(
  {
    // id 如果没有显示设定id sequelize会自动帮你创建一下名为id的铸件
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,//设置主键
      autoIncrement: true //自动增长
    },
    nickname: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      unquie: true
    },
    pwd: Sequelize.STRING,
    openid: {
      type: Sequelize.STRING(64),
      unquie: true
    }
  }, {
    sequelize,//数据库实例
    tableName: 'user'
  })

/**
* 扩展知识：
* 一个用户对于不同的小程序，有不同的openid
* 例如：
* 用户对于A小程序，是openid 是‘1234’，
* 用户对于B小程序，是openid 是'32234'
* 用户对于小程序，公众号，微信，有一个唯一不变的unionID
*/

module.exports = {
  User
}