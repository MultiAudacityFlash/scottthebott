const commando = require ('discord.js-commando');
const YTDL = require('ytdl-core');

function Breakout(connection, message)
{
    var server = servers[message.guild.id];
    server.dipatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dipatcher.on("end", function(){
        connection.disconnect();
    }
    })
}

class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins the voice channel of the commander'
        });
    }

    async run (message, args)
    {
        if (message.member.voiceChannel)
        {
            if(message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                    .then(connection =>)
                        message.reply("HEY ALL, SCOTT HERE, JUST HERE TO PLAY THE ONLY SONG WORTH MY TIME.")
                    })
            }
        }
        else
        {
            message.reply("I don't like being alone in voice chat, my doctor says I shouldn't be alone with my thoughts if I don't want to kill anymore innocent Chibi Robo Zip Lash copies... ````INNOCENT.````");
        }
        if(msg.guild.voice)
        {
            if(servers[message.guild.id])
            {
                servers[message.guild.id] = {queue: []}
            }
            msg.member.voiceChannel.join()
                .then(connection =>{
                    message.reply("Someone summoned me?");
                    var server = server[message.guild.id];
                    server.queue.push(args);
                    Breakout(connection, message);
                })
        }
        else
        {
            message.reply("Nice, inviting me to a party with the person I hate the most as the only member; Scott Wozniak.")
        }
    }
}

module.exports = JoinChannelCommand;