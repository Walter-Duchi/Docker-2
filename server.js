import express from 'express'
import mysql from 'mysql2/promise'

const app = express()

const client = mysql.createPool({
  host: 'localhost',
  port: 2000,
  user: 'root',
  password: 'wadr'
})

const response = await client.query('SELECT 1+1')

console.log(response)

app.listen(3000)
console.log('Server on port 3000')