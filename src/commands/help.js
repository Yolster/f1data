const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const { EmbedBuilder, PermissionsBitField, version } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Get help menu!"),
    run: async (client, interaction) => {

       var dia = "<:diamond:1018601111323676792>" 
    const embed = new EmbedBuilder()
      .setTitle('Help Menu')
      .setAuthor({
        name:`${client.user.username}`,
        iconURL:client.user.displayAvatarURL(),
        url:"https://discord.gg/dFVggKATCf"
      })
      .setColor("#D050F0")
      .setDescription(`Just support \`/ (slash)\` commands.
      ${dia} **/help:** Shows the help menu.
      ${dia} **/botinfo:** Shows bot stats.
      ${dia} **/circuits (name):** Provides information about the circuits.
      ${dia} **/driver-ranks (season):** Shows season driver rank.
      ${dia} **/driverinfo (name):** Provides information about the driver.
      ${dia} **/team-ranks (season):** Shows season team rank.
      ${dia} **/teaminfo (name):** Provides information about the team.
      ${dia} **/ping:** Shows the delay of the bot`)
      .setThumbnail(client.user.displayAvatarURL())
    
    return interaction.reply({ embeds: [embed] });
    }
 };
