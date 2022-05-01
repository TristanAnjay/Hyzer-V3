let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Script')).buffer(), `
Private Bro, Ga Buat Public*_
`.trim(), '❖ One', 'Loh Kok Gitu???', 'yntkts')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
