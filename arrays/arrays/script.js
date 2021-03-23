let imgs = [
    'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701700909.jpg',
    'https://www.wallpaperup.com/uploads/wallpapers/2013/10/27/165806/4c48fa646a93565e14d3b1f12b57eccc.jpg',
    'https://wallup.net/wp-content/uploads/2019/09/35514-landscapes-spray-splash-drops-timelapse-rivers-flowers.jpg',
    'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701700909.jpg',
    'https://www.wallpaperup.com/uploads/wallpapers/2013/10/27/165806/4c48fa646a93565e14d3b1f12b57eccc.jpg',
    'https://wallup.net/wp-content/uploads/2019/09/35514-landscapes-spray-splash-drops-timelapse-rivers-flowers.jpg',

]

// document.write(`<img src='${imgs[0]}' width ="200">`)
// document.write(`<img src='${imgs[1]}' width ="200">`)
// document.write(`<img src='${imgs[2]}' width ="200">`)

document.write('<hr>')

document.write('<div class="wrap">')

for (let i = 0; i < imgs.length; i++) {
    document.write(`
    <div class="photo-item">
   <img src='${imgs[i]}' width="200"> >
        </div>
    `)
}

document.write('</div>')

// let imgs = [
//     'https://masyamba.ru/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD/29-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D1%8B.jpg',
//     'https://s1.1zoom.ru/big3/568/345438-svetik.jpg',
//     'https://proprikol.ru/wp-content/uploads/2020/08/kartinki-krutyh-mashin-5.jpg',
//     'https://w-dog.ru/wallpapers/1/13/549013340965284/avtomobil-oboi-belyj-lamborghini-murcielago-lp670-4-superveloce-srauto-tyuning-sportkar-dlya-rabochego-stola-oboya-belaya-lamborgini-murselago-krasivaya-mashina.jpg',
//     'http://fonday.ru/images/tmp/8/0/original/80420eYw85EJ3s0oPK46Ax2w2cIsek7j.jpg',
//     'http://www.auto-tuning-news.com/uploads/photogallery/viper_srt_11_big_9_11_7.jpg'
// ]

// document.write('<p></p>')

// document.write('<div class="wrap">')

// for (let i = 0; i < imgs.length; i++) {
//     document.write(`
//     <div class="photo-item">
//    <img src='${imgs[i]}' width="10%"> >
//         </div>
//     `)
// }

// document.write('</div>')