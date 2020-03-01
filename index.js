const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjgzNTY1OTM1MDUxMDE0MTQ0.Xltbfw.MtWf-tI8sr0SkXpAQe0QpIDI_Ro'

bot.on('ready', () =>{
    console.log('Hey all, Scott here!');
    bot.user.setGame(`Madden '08`)
})

bot.on('message', msg=>{
    if(msg.content ===  "hey all"){
        msg.channel.sendMessage(`SCOTT HERE`);
    }
    if(msg.content ===  "Hey all"){
        msg.channel.sendMessage(`SCOTT HERE`);
    }
    if(msg.content ===  "HEY ALL"){
        msg.channel.sendMessage(`SCOTT HERE`);
    }
    if(msg.content ===  "hey all!"){
        msg.channel.sendMessage(`SCOTT HERE`);
    }
    if(msg.content ===  "Hey all!"){
        msg.channel.sendMessage(`SCOTT HERE`);
    }
    if(msg.content ===  "HEY ALL!"){
        msg.channel.sendMessage(`SCOTT HERE`);
    }
    if(msg.content ===  "hey all."){
        msg.channel.sendMessage(`SCOTT HERE`);
    }
    if(msg.content ===  "Hey all."){
        msg.channel.sendMessage(`SCOTT HERE`);
    }
    if(msg.content ===  "HEY ALL."){
        msg.channel.sendMessage(`SCOTT HERE`);
    }
    if(msg.content ===  "madden 08"){
        msg.channel.sendMessage(`DID SOMEONE SAY PERFECTION? :heart_eyes: `);
    }
    if(msg.content ===  "Madden 08"){
        msg.channel.sendMessage(`DID SOMEONE SAY PERFECTION? :heart_eyes: `);
    }
    if(msg.content ===  "madden '08"){
        msg.channel.sendMessage(`DID SOMEONE SAY PERFECTION? :heart_eyes: `);
    }
    if(msg.content ===  "Madden '08"){
        msg.channel.sendMessage(`DID SOMEONE SAY PERFECTION? :heart_eyes: `);
    }
    if(msg.content ===  "madden 09"){
        msg.channel.sendMessage(`DID SOMEONE SAY TERRIBLE? :D`);
    }
    if(msg.content ===  "Madden 09"){
        msg.channel.sendMessage(`DID SOMEONE SAY TERRIBLE? :D`);
    }
    if(msg.content ===  "madden '09"){
        msg.channel.sendMessage(`DID SOMEONE SAY TERRIBLE? :D`);
    }
    if(msg.content ===  "Madden '09"){
        msg.channel.sendMessage(`DID SOMEONE SAY TERRIBLE? :D`);
    }
})

bot.login(token);
