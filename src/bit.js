const { Telegraf } = require('telegraf');

const {getServiceById, getServicesKeyboard} = require('./modules/services')
const userModule = require('./modules/user');
const driverModule = require('./modules/driver');

const bot = new Telegraf('6699256155:AAGOGrrjX8p5nIRzqS_hC88maDkME2OPhus');


function displayServices(ctx) {
    const keyboard = getServicesKeyboard();
    ctx.reply('Choose a service:', keyboard);
  }

  bot.start((ctx) => {
    ctx.reply('Welcome to your bot!');
    displayServices(ctx);
  });

  bot.action(/select_(\d+)/, async (ctx) => {
    const serviceId = Number(ctx.match[1]);
    const selectedService = getServiceById(serviceId);
  
    if (selectedService) {
      const command = selectedService.command;
      console.log('Selected service:', selectedService);
      
      try {
        await ctx.reply(`You selected: ${selectedService.name}. Executing command: /${command}`);
       
      } catch (error) {
        console.error('Error sending message:', error);
      }
    } else {
      console.log('Invalid selection');
      ctx.reply('Invalid selection.');
    }
  });
  

userModule(bot);
driverModule(bot)

bot.launch();