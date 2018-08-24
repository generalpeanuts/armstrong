const Discord = require('discord.js');
const bot = new Discord.Client();
var holder;
var targetc = "422363521641218048";
bot.on('ready', () => {
    console.log('Ready!');
});



bot.login('NDgyMjkwMzc4OTI2NzE5MDI2.DmEseg.bQ0UoRL6MrjxwT15idSUy3R1UBk');

bot.on('message', message => {
    if(message.content.startsWith('!am '))
    {
        
        holder = message.content;
        holder = holder.substring(holder.indexOf(' ')+1);
        message.delete();
        bot.channels.get(targetc).send(holder);
        //message.channel.send(holder);
    }
    if(message.content == '!h' || message.content == '!help')
    {
        message.delete();
        message.channel.send(' **Lisanna Bot Help** \n`!am <text>`   *Lisanna deletes your message and posts it anonymously.*');
    }
});