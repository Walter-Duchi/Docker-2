import express from 'express'
import mysql from 'mysql2/promise'
import mongoose from 'mongoose'

const app = express()

const client = mysql.createPool({
  host: 'localhost',
  port: 2000,
  user: 'root',
  password: 'wadr'
})

const response = await client.query('SELECT 1+1')

console.log(response[0])

const mongoConnection = await mongoose.connect('mongodb://localhost:27017/wadrdb')
console.log(mongoConnection.connection.db.databaseName)

app.listen(3000)
console.log('Server on port 3000')