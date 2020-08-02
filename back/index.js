// 網頁伺服器
import express from 'express'
// 讓 express 可以讀取 Body 資料
import bodyParser from 'body-parser'
// 跨域套件
import cors from 'cors'
// MD5 加密
// import md5 from 'md5'
// 資料庫檔案
import db from './db.js'

import connectMongo from 'connect-mongo'
import session from 'express-session'

const app = express()

const MongoStore = connectMongo(session)

app.use(session({
  secret: 'counseling',
  // 將 session 存入 mongodb
  store: new MongoStore({
    // 使用 mongoose 的資料庫連接
    mongooseConnection: db.connection,
    // 設定存入的 collection
    collection: process.env.COLLECTION_SESSION
  }),
  // session 有效期間
  cookie: {
    // 1000 毫秒 = 一秒鐘
    // 1000 毫秒 * 60 = 一分鐘
    // 1000 毫秒 * 60 * 30 = 三十分鐘
    maxAge: 1000 * 60 * 30
  },
  // 是否保存未修改的 session
  saveUninitialized: false,
  // 是否每次重設過期時間
  rolling: true,
  resave: true
}))

// 讓 express 使用 body-parser，並把收到的資料轉 json
app.use(bodyParser.json())

// 設定跨域套件
app.use(cors({
  // origin 為請求來源網域, callback 為是否允許的回應
  origin (origin, callback) {
    // 允許任何來源網域的請求
    callback(null, true)
    // 若要拒絕請求則是
    // callback(new Error('cors error'), false)
  },
  // 允許跨域認證
  credentials: true
}))

app.post('/order', async (req, res) => {
  if (!req.headers['content-type'].includes('application/json')) {
    res.status(400)
    res.send({ success: false, message: '格式不符' })
    return
  }
  try {
    const result = await db.cases.create({
      name: req.body.name,
      age: req.body.age,
      number: req.body.number,
      email: req.body.email,
      worry: req.body.worry,
      date: req.body.date,
      time: req.body.time,
      selected: req.body.selected
    })
    res.status(200)
    res.send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      // 資料格式錯誤
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400)
      console.log(error)
      res.send({ success: false, message })
    } else {
      // 伺服器錯誤
      res.status(500)
      res.send({ success: false, message: '伺服器錯誤' })
    }
  }
})

app.get('/order', async (req, res) => {
  try {
    const result = await db.cases.find()
    res.send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
})

// 啟動網頁伺服器
app.listen(process.env.PORT, () => {
  console.log('已啟動')
})
