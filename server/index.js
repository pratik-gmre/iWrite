require('dotenv').config();
const express = require('express')
const http = require('http')
const cors = require('cors')
const connectTOMongo = require('./config/db.js')
const router = require('./routes/user-routes.js')


const app = express();
const port = process.env.PORT ;


app.use(express.json());
app.use(cors());

app.use('/api/user',router)

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

connectTOMongo().then(()=>{ const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`Server running at ${port}`);
  });})

