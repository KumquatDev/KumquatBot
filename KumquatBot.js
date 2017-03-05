const Discord = require('discord.js');
const client = new Discord.Client();
var text = require("./text.json");

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
            message.channel.sendMessage(text.commands.steam);
            message.delete();
        }
        if(commandIs("plebs", message)){
            message.channel.sendMessage(text.commands.plebs);
            message.delete();
        }
        if(commandIs("discordsub", message)){
            message.channel.sendMessage(text.commands.discordsub);
            message.delete();
        }
        if(commandIs("subsong", message)){
            message.channel.sendMessage(text.commands.subsong);
            message.delete();
        }    
        if(commandIs("glm", message)){
            message.channel.sendMessage(text.commands.glm);
            message.delete();
        }
        if(commandIs("twitch", message)){
            message.channel.sendMessage(text.commands.twitch);
            message.delete();
        }
        if(commandIs("youtube", message)){
            message.channel.sendMessage(text.commands.youtube);
            message.delete();
        }
        if(commandIs("twitter", message)){
            message.channel.sendMessage(text.commands.twitter);
            message.delete();
        }
        if(commandIs("fansenstwitter", message)){
            message.channel.sendMessage(text.commands.fansenstwitter);
            message.delete();
        }
        if(commandIs("sikumatwitter", message)){
            message.channel.sendMessage(text.commands.sikumatwitter);
            message.delete();
        }
        if (commandIs("ping", message)) {
            message.channel.sendMessage("pong" );
            message.delete();
        }
        if(commandIs("help", message)){ 
           message.channel.sendMessage("`!delete [number of messages(max 15)]: deletes [number of messages] messages`\n`!ping: pong`" +
           "\n`!steam: Erklärung Steamgruppe`\n`!discordsub: Erklärung Discord-Rang`\n`!plebs: Erklärung Pleb`" +
           "\n`!twitch: Venis Twitch`\n`!youtube: Venis Youtube`\n`!twitter: Venis Twitter`" +
           "\n`!fansenstwitter: fansens Twitter`\n`!sikumatwitter: Sikumas Twitter`\n`!subsong: Venis Subsongs`");
        }
    }
    else {
        return;
    }
});

client.login(text.secrets.token);