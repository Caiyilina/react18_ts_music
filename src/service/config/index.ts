// 方式一，手动切换不同环境
// export const BASE_URL = 'http://coderwhy.dev:9002'
// export const BASE_URL = 'http://codercba.prod:9002'

// 方式二，根据 process.env.NODE_ENV 区分
/**
 * 开发环境：development
 * 生产环境：production
 * 测试环境：text
 */
let BASE_URL: string
const TIME_OUT = 25000

console.log("process.env.NODE_ENV:", process.env.NODE_ENV)
console.log("process.env:", process.env)

switch (process.env.NODE_ENV) {
  case "development":
    BASE_URL = "http://codercba.com:9002"
    break
  case "production":
    BASE_URL = "http://codercba.com:9002"
    break
}

// 3、从定义的环境变量的配置文件中加载
console.log("process.env.REACT_APP_BASE_URL:", process.env.REACT_APP_BASE_URL)

export { BASE_URL, TIME_OUT }
