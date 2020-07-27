// 網頁伺服器
import express from 'express'
// 讓 express 可以讀取 Body 資料
import bodyParser from 'body-parser'
// 跨域套件
import cors from 'cors'
// MD5 加密
import md5 from 'md5'
// 資料庫檔案
import db from './db.js'

const app = express()

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

// 啟動網頁伺服器
app.listen(3000, () => {
  console.log('網頁伺服器已啟動')
  console.log('http://localhost:3000')
})
