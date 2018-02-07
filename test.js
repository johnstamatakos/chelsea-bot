'use strict';

let Botkit = require('botkit');

if (!process.env.SLACK_TOKEN) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

let controller = Botkit.slackbot({
    debug: false
});

controller
    .spawn({
        token: process.env.SLACK_TOKEN
    })
    .startRTM(function(err, bot, payload) {
        if (err) {
            throw new Error(err);
        }
    });

controller.hears(['Hey Chelsea'], ['ambient'], function(bot, message) {
    bot.reply(message, 'I never loved Chad! I miss you Mario.');
});
