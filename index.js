const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTgzNTAxMTYwMTM3MzU5Mzgx.XO977A.NUQFFaiecaCBFF13YucQnZYmtYM'

const PREFIX = 'ahh';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log ('This bot is online!');
    bot.user.setActivity('TAHAP PENGEMBANGAN', { type: 'WATCHING'}).catch(console.error);

})

bot.on('message', message => {
 
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'infoAHHOY':
            message.channel.sendMessage('https://www.instagram.com/ahoy.sq/')
            break;
        case 'clear':
            if(!args[1]) return message.reply('Error please define second arg')
            message.channel.bulkDelete(args[1]);
            break;
        case 'myprofile':
            const embed = new Discord.RichEmbed()
            .setTitle('`User Information`')
            .addField('Player Name', message.author.username)
            .addField('Version', version)
            .addField('Current Server', message.guild.name)
            .setColor('0x2ECC71')
            .setThumbnail(message.author.avatarURL)
            .setFooter('**CHECK MY SOCIAL MEDIA**')
            message.channel.sendEmbed(embed);
            break;
            case 'play':
                    if (!args[1]) {
                        message.channel.sendMessage("please provide a link");
                        return;
                    }
        
                    if (!message.member.voiceChannel) {
                        message.channel.sendMessage("You must be in a voice channel");
                        return;
        
                    }
        
                    if (!servers[message.guild.id]) servers[message.guild.id] = {
                        queue: []
        
                    };
        
                    var server = servers[message.guild.id];

                    server.queue.push(args[1]);
        
                    if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                        play(connection, message);
                    });
        
                    break;
                case "skip":
                    var server = servers[message.guild.id];
        
                    if (server.dispatcher) server.dispatcher.end();
                    break;
                case "stop":
                    var server = servers[message.guild.id];
        
                    if (message.guild.voiceConnection)
        {
            for (var i = server.queue.length - 1; i >= 0; i--) 
            {
                server.queue.splice(i, 1);
         }
            server.dispatcher.end();
            console.log("[" + new Date().toLocaleString() + "] Stopped the queue.");
        }       
                
            }

            
            
            }

    
)

bot.login(token);
