const Discord = require('discord.js');
const bot = new Discord.Client();
var holder;
var targetc = "482609538873425921";
bot.on('ready', () => {
    console.log('Ready!');
});



bot.login(process.env.token);

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
    if(message.content == '!seppuku')
    {
        var a = message.author;
        message.channel.send({
            files: [
                "./seppuku.png"
            ]
        }, a +' has brought dishonor to his family and has commited seppuku!');
    }
        
});
