const discord = require('discord.js');
const client = new discord.Client();
const token = "NjgxMDA5ODkyNTY3Mjg1ODM4.XlIODw.oGP9UqP5fobGpyYTiUV8moaUA8A";
const mafia_ready = require('./mafia/ready');

let players = [];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
    const prefix = "!";
    const guild = new discord.Guild();

    // if(!msg.author.bot) return;
    if(!msg.guild) return;
    if(!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim();
    const cmd = args.toLowerCase();
    
    if(cmd === 'join'){
        if(mafia_ready.getUsers(players, msg.author.username)){
            msg.reply(`Joinned to the Game.`);
            msg.delete();
        }else {
            msg.reply(`Already Joinned to the Game.`);
            msg.delete();
        }
    }

    if(cmd === 'quit'){
        mafia_ready.deleteUsers(players, msg.author.username);
        msg.reply(`User Exited the Game.`);
        msg.delete();
    }

});


client.login(token);