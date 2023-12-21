const {Telegraf} = require('telegraf');

const userModule = (bot) => {
    bot.command('register', (ctx) => ctx.reply ('You have been registered'));
    // Add more function
}

module.exports = userModule;