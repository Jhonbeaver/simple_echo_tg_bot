require('dotenv').config()
var cors = require('cors')
const app = require('express')();
const server = require('http').createServer(app);
var io = require('socket.io')(server);
io.set('origins', 'https://geekninja.ru');
const { Telegraf } = require('telegraf')
app.use(cors())

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.on('message', (ctx) => {
    if (ctx.message.chat.id == '-1001130603069') {
        io.emit('chatmessage', `${ctx.message.from.username}: ${ctx.message.text}`);
    }
})

io.on('connection', socket => { /* ... */ });

server.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

bot.launch()