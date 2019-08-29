require('dotenv').config() // Import the environment variables into process.env

const discord = require('discord.js') // Import the Discord.js module
const bot = new discord.Client() // Create a new Discord Client
global.embed = discord.RichEmbed // Lets us access the RichEmbed object anywhere in the code

bot.on('ready', () => {
  console.log(`${bot.user.username} is ready for action!`);
})

bot.login(process.env.token)
