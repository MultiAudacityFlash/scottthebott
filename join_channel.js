const commando = require ('discord.js-commando');
const YTDL = require('ytdl-core');

function Scott, play Breakout.(connection, message)
{
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
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
                    Scott, play Breakout.(connection, message);
                })
        }
        else
        {
            message.reply("Nice, inviting me to a party with the person I hate the most as the only member; Scott Wozniak.")
        }
    }
}

module.exports = JoinChannelCommand;