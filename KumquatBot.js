const Discord = require('discord.js');
const client = new Discord.Client();
var secrets = require("./secrets.json");

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("!" + str);
}

function getRoles(array){
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role){
    if(getRoles(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }
}

client.on('ready', () => 
{
    console.log('KumquatBot ist online!');
});

client.on('message', message =>  {
    var args = message.content.split(/[ ]+/); // Argumente finden
    if(hasRole(message.member, "Staff") || hasRole(message.member, "Twitchmod") || hasRole(message.member, "Supporter") || hasRole(message.member, "Admin") ||
     hasRole(message.member, "Ich hab die Haare schön")){
        if(commandIs("delete", message)) {
            var amount;
            if(args.length === 2) {
                amount = parseInt(args[1]) + 1;
                if(amount > 0 && amount < 17){ // maximal 15 Nachrichten auf einmal löschen
                    message.channel.fetchMessages({limit: amount}).then(messages => message.channel.bulkDelete(messages));
                } else {
                    return;
                }
            } else {
                return;
            }
        }
        if(commandIs("steam", message)){
            message.channel.sendMessage(secrets.commands.steam);
            message.delete();
        }
        if(commandIs("plebs", message)){
            message.channel.sendMessage(secrets.commands.plebs);
            message.delete();
        }
        if(commandIs("discordsub", message)){
            message.channel.sendMessage(secrets.commands.discordsub);
            message.delete();
        }
        if(commandIs("subsong", message)){
            message.channel.sendMessage(secrets.commands.subsong);
            message.delete();
        }    
        if(commandIs("glm", message)){
            message.channel.sendMessage(secrets.commands.glm);
            message.delete();
        }
        if(commandIs("twitch", message)){
            message.channel.sendMessage(secrets.commands.twitch);
            message.delete();
        }
        if(commandIs("youtube", message)){
            message.channel.sendMessage(secrets.commands.youtube);
            message.delete();
        }
        if(commandIs("twitter", message)){
            message.channel.sendMessage(secrets.commands.twitter);
            message.delete();
        }
        if(commandIs("fansenstwitter", message)){
            message.channel.sendMessage(secrets.commands.fansenstwitter);
            message.delete();
        }
        if(commandIs("sikumatwitter", message)){
            message.channel.sendMessage(secrets.commands.sikumatwitter);
            message.delete();
        }
        if (commandIs("ping", message)) {
            message.channel.sendMessage("pong");
            message.delete();
        }
        if(commandIs("help", message)){ 
           message.channel.sendMessage(secrets.commands.help);
        }
    }
    else {
        return;
    }
});

client.login(secrets.bot.token);