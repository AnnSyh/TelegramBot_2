const PhotoURL = 'https://www.calend.ru/img/content/i0/293_1.jpg'
const PhotoURL1 = 'https://simsim2.7773.ru/local/assets/img/1.jpg'
const PhotoURL2 = 'https://simsim2.7773.ru/local/assets/img/2.jpg'
const PhotoURL3 = 'https://simsim2.7773.ru/local/assets/img/3.jpg'
const PhotoURL4 = 'https://simsim2.7773.ru/local/assets/img/4.jpg'

const NamePhoto = 'Подпись к фото'
const NamePhoto1 = 'Не понимаете, что делать? Введите команду /help'


export const areYouBot = (ctx:any) => {
    ctx.reply('Да! Как ты узнал? 😮')
}

export const getPhoto = (ctx:any) => {
  ctx.replyWithPhoto({filename: "", source: undefined, url: PhotoURL}, {caption: NamePhoto});
}
export const getPhoto1 = (ctx:any) => {
  ctx.replyWithPhoto({filename: "", source: undefined, url: PhotoURL1}, {caption: NamePhoto1});
}
export const getPhoto2 = (ctx:any) => {
  ctx.replyWithPhoto({filename: "", source: undefined, url: PhotoURL2}, {caption: NamePhoto1});
}
export const getPhoto3 = (ctx:any) => {
  ctx.replyWithPhoto({filename: "", source: undefined, url: PhotoURL3}, {caption: NamePhoto1});
}
export const getPhoto4 = (ctx:any) => {
  ctx.replyWithPhoto({filename: "", source: undefined, url: PhotoURL4}, {caption: NamePhoto1});
}

