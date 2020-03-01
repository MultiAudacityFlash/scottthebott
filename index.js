const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjgzNTY1OTM1MDUxMDE0MTQ0.Xltbfw.MtWf-tI8sr0SkXpAQe0QpIDI_Ro'

bot.on('ready', () =>{
    console.log('Hey all, Scott here!');
    bot.user.setGame(`Madden '08`)
})

bot.on('message', msg=>{
    if(msg.author.bot){
        return;
    }
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
    if(msg.content.includes("madden 08")){
        msg.channel.sendMessage(`DID SOMEONE SAY PERFECTION? :heart_eyes: `);
    }
    if(msg.content.includes("Madden 08")){
        msg.channel.sendMessage(`DID SOMEONE SAY PERFECTION? :heart_eyes: `);
    }
    if(msg.content.includes("madden '08")){
        msg.channel.sendMessage(`DID SOMEONE SAY PERFECTION? :heart_eyes: `);
    }
    if(msg.content.includes("Madden '08")){
        msg.channel.sendMessage(`DID SOMEONE SAY PERFECTION? :heart_eyes: `);
    }
    if(msg.content.includes("MADDEN 08")){
        msg.channel.sendMessage(`DID SOMEONE SAY PERFECTION? :heart_eyes: `);
    }
    if(msg.content.includes("MADDEN '08")){
        msg.channel.sendMessage(`DID SOMEONE SAY PERFECTION? :heart_eyes: `);
    }
    if(msg.content.includes("madden 09")){
        msg.channel.sendMessage(`DID SOMEONE SAY TERRIBLE? :D`);
    }
    if(msg.content.includes("Madden 09")){
        msg.channel.sendMessage(`DID SOMEONE SAY TERRIBLE? :D`);
    }
    if(msg.content.includes("madden '09")){
        msg.channel.sendMessage(`DID SOMEONE SAY TERRIBLE? :D`);
    }
    if(msg.content.includes("Madden '09")){
        msg.channel.sendMessage(`DID SOMEONE SAY TERRIBLE? :D`);
    }
    if(msg.content.includes("MADDEN 09")){
        msg.channel.sendMessage(`DID SOMEONE SAY TERRIBLE? :D`);
    }
    if(msg.content.includes("MADDEN '09")){
        msg.channel.sendMessage(`DID SOMEONE SAY TERRIBLE? :D`);
    }
    if(msg.content.includes("burger king")){
        msg.channel.sendMessage(`*I __ATE HERE.__*
        
https://pbs.twimg.com/ext_tw_video_thumb/1139216636697894912/pu/img/_y-UE9Z7_zYJeDf1.jpg`);
    }
    if(msg.content.includes("Burger king")){
        msg.channel.sendMessage(`*I __ATE HERE.__*
        
https://pbs.twimg.com/ext_tw_video_thumb/1139216636697894912/pu/img/_y-UE9Z7_zYJeDf1.jpg`);
    }
    if(msg.content.includes("Burger King")){
        msg.channel.sendMessage(`*I __ATE HERE.__*
        
https://pbs.twimg.com/ext_tw_video_thumb/1139216636697894912/pu/img/_y-UE9Z7_zYJeDf1.jpg`);
    }
    if(msg.content.includes("BURGER KING")){
        msg.channel.sendMessage(`*I __ATE HERE.__*
        
https://pbs.twimg.com/ext_tw_video_thumb/1139216636697894912/pu/img/_y-UE9Z7_zYJeDf1.jpg`);
    }
    if(msg.content.includes("flingsmash")){
        msg.channel.sendMessage(`Never leave my house without my stack of FlingSmash copies, don't ask why they're all wet.`);
    }
    if(msg.content.includes("Flingsmash")){
        msg.channel.sendMessage(`Never leave my house without my stack of FlingSmash copies, don't ask why they're all wet.`);
    }
    if(msg.content.includes("FlingSmash")){
        msg.channel.sendMessage(`Never leave my house without my stack of FlingSmash copies, don't ask why they're all wet.`);
    }
    if(msg.content.includes("FLINGSMASH")){
        msg.channel.sendMessage(`Never leave my house without my stack of FlingSmash copies, don't ask why they're all wet.`);
    }
    if(msg.content.includes("fling smash")){
        msg.channel.sendMessage(`Never leave my house without my stack of FlingSmash copies, don't ask why they're all wet.`);
    }
    if(msg.content.includes("Fling smash")){
        msg.channel.sendMessage(`Never leave my house without my stack of FlingSmash copies, don't ask why they're all wet.`);
    }
    if(msg.content.includes("Fling Smash")){
        msg.channel.sendMessage(`Never leave my house without my stack of FlingSmash copies, don't ask why they're all wet.`);
    }
    if(msg.content.includes("FLING SMASH")){
        msg.channel.sendMessage(`Never leave my house without my stack of FlingSmash copies, don't ask why they're all wet.`);
    }
})

bot.login(token);
