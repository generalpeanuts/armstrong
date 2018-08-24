const Discord = require('discord.js');
const bot = new Discord.Client();
var holder;

bot.on('ready', () => {
    console.log('Ready!');
});



bot.login('NDgyMjkwMzc4OTI2NzE5MDI2.DmEseg.bQ0UoRL6MrjxwT15idSUy3R1UBk');

bot.on('message', message => {
    if(message.content.startsWith('!am '))
    {
        
        holder = message.content;
        message.delete();
        holder = holder.substring(holder.indexOf(' ')+1);
        message.channel.send(holder);
    }
});