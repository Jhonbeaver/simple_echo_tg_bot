require('dotenv').config()
var io = require('socket.io')(5000);
io.set('origins', 'https://geekninja.ru');
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.on('message', (ctx) => {
    if (ctx.message.chat.id == '-1001130603069') {
        io.emit('chatmessage', `${ctx.message.from.username}: ${ctx.message.text}`);
    }
})

bot.launch()