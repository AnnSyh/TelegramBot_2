require('dotenv').config()
import Telegraf from 'telegraf'

const TOKEN: any = '1414888494:AAFv2kvoEYuToS0XYuiZH6ujwraYSdCogBU'
// const PhotoURL = 'https://picsum.photos/200/300/?random'

export const bot = new Telegraf(TOKEN)

import {start, help} from './commands'
import {areYouBot} from './listeners'
import {getPhoto} from './listeners'
import {getPhoto1} from './listeners'
import {getPhoto2} from './listeners'
import {getPhoto3} from './listeners'
import {getPhoto4} from './listeners'

console.log('Bot has been started ....')


// команды
bot.start(start)
bot.help(help)

// bot.command('photo', getPhoto)

bot.command('cow', getPhoto1)
bot.command('tree',getPhoto2)
bot.command('gift', getPhoto3)
bot.command('luck', getPhoto4)

// слушатели текста
bot.hears("Фото", getPhoto)
// bot.hears("Cow", getPhoto1)
// bot.hears("Tree", getPhoto2)
// bot.hears("Gift", getPhoto3)
// bot.hears("Luck", getPhoto4)
bot.hears("Ты бот?", areYouBot)

// слушатели событий
// введенна неизвестная команда
bot.on('text', (ctx: any) => {
  ctx.reply(` Ваша команда неверная. Попробуйте еще раз. `)
})
//запуск бота
bot.launch()
