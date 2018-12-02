var Discord = require('discord.io');
var logger = require('winston');
var options = require('./options.json');
var Jimp = require('jimp');
const loadout = require ('./loadout.js');
const strdex = require ('./strdex.js');
const horoscope = require ('./horoscope.js');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: options.authtoken,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!' && options.channelids.indexOf(channelID) != -1) {
        bot.sendMessage({
            to: channelID,
            message: "Please use +[command] instead."
        });
    }
    if (message.substring(0, 1) == '+' && options.channelids.indexOf(channelID) != -1) {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'help':
                if (args.length == 0) {
                    bot.sendMessage({
                        to: channelID,
                        message: "+loadout, +str {img url}, +dex {img url}, +horoscope"
                    });
                }
                break;
            case 'loadout':
                var now_date = new Date();
                var seed = userID * now_date.getDate() * now_date.getMonth() * now_date.getFullYear();
                var user_loadout = loadout.generate(user, seed);
                bot.sendMessage({
                    to: channelID,
                    message: user_loadout
                });
                break;
            case 'str':
                var url = args[0];
                var bias = args[1];

                if (!url || url.substring(0, 4) != 'http') {
                    bot.sendMessage({
                        to: channelID,
                        message: "Invalid URL."
                    });
                } else {
                    strdex.generate(url, false, function() {
                        bot.uploadFile({
                            to: channelID,
                            file: "output.png"
                        });
                    });
                }
                break;
            case 'dex':
                var url = args[0];
                var bias = args[1];

                if (!url || url.substring(0, 4) != 'http') {
                    bot.sendMessage({
                        to: channelID,
                        message: "Invalid URL."
                    });
                } else {
                    strdex.generate(url, true, function() {
                        bot.uploadFile({
                            to: channelID,
                            file: "output.png"
                        });
                    });
                }
                break;
            case 'horoscope':
                var now_date = new Date();
                var seed = userID * 234546675 * now_date.getDate() * now_date.getMonth() * now_date.getFullYear();

                bot.sendMessage({
                    to: channelID,
                    message: user + ", your horoscope for the day is:\n\n*" + horoscope.generate(seed) + "*"
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});