const fs = require('fs')
const chalk = require('chalk')

global.owner = "6285776568948"
global.namabot = "Natsu UNIVERSE*"
global.namaCreator = "FizzxDEV"
global.autoJoin = true
global.antilink = false
global.versisc = '3.0.0'
global.codeInvite = "FxHYWIP1p8ZA8nuC0ZGJHv" //JANGAN DI UBAH 
global.domain = 'natsuuuniverse.infinityfreeapp.com' // Isi Domain Lu
global.apikey = 'ptla_hJ1SrujllALfjFTFACeODxChmQSZqb3lYgSky2mZKcI' // Isi Apikey Plta Lu
global.capikey = 'ptlc_igS3QgggA385hakQa1pr76CxkYAfkD84uWMNS5wSERE' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.imageurl = 'https://telegra.ph/file/f7ddff0f6be473d4e6e6f.jpg'
global.isLink = 'https://whatsapp.com/channel/0029Vaa0vlOBvvsfl5jcVZ19'
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.simbol = '∮'
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = "© Created Fizzx"
global.author = "Fizzx"
global.jumlah = "5"

//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
