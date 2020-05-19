const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', (Njk5NzU5NDQ3MjcwMjI3OTY4.XsM3Ig.tmpnqVGdW2n5KynFYOY5MBykDI8) => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Bot?') {
    msg.reply('Bot Online');
  }
});

client.login('token');