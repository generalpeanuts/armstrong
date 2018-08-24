const Discord = require('discord.js');
const bot = new Discord.Client();
var holder;

bot.on('ready', () => {
    console.log('Ready!');
});



bot.login(process.env.token);

bot.on('message', message => {
    if(message.content.startsWith('!am '))
    {
        
        holder = message.content;
        message.delete();
        holder = holder.substring(holder.indexOf(' ')+1);
        message.channel.send(holder);
    }
});
