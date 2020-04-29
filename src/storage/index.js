const STORAGE_KEY = 'mall'
const storage = {
  user: {
    name: '张三',
    age: 18,
    sex: 1
  }
}
console.log(storage)

export default {
  // 获取整个storage
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 获取storage里的key和value
  getItem (key, moduleName) {
    // 如果存在外层模块字段，如上的storage中的user
    if (moduleName) {
      const data = this.getItem(moduleName)
      if (data) {
        return data[key]
      }
    }
    return this.getStorage()[key]
  },
  // 设置storage里的key和value
  setItem (key, value, moduleName) {
    if (moduleName) {
      const data = this.getStorage()[key]
      data[key] = value
      this.setItem(moduleName, data)
    } else {
      const data = this.getStorage()
      data[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    }
  },
  // 清除storage里的key和value
  clearStorage (key, moduleName) {
    const data = this.getStorage()
    if (moduleName) {
      delete data[moduleName][key]
    } else {
      delete data[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }
}
