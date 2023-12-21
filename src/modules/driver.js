const {Telegraf} = require('telegraf');
const driverModule = (bot) => {
    bot.command('search', (ctx) => ctx.reply('Tìm kiếm khách hàng'));
    // Add more  function
}

module.exports = driverModule;