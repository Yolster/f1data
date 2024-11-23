const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const { EmbedBuilder, PermissionsBitField, version } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("botinfo")
    .setDescription("Get F1 Data Bot stats!"),
    run: async (client, interaction) => {

      const duration = moment
      .duration(client.uptime)
      .format(" D [day], H [hours], m [minutes], s [seconds]");
    const embed = new EmbedBuilder()
  
      .setColor("#D050F0")
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
        {name:"» **Owner**",value:"<@800809750584492052>| This bot is open-source on Github: https://github.com/Yolster/f1data"},
        {name:"» **Ram usage**", value:(process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + " MB", inline:true},
        {name:"» **Work duration**", value:duration},
        {name:"» **Users**:", value:`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`},
        {name:"» **Servers**", value:client.guilds.cache.size.toLocaleString(),inline:true},
        {name:"» **Channels**", value:client.channels.cache.size.toLocaleString(), inline:true},
        {name:"» **Discord.JS version**",value: "v" + version, inline:true},
        {name:"» **Node.JS version**", value: `${process.version}`, inline:true},
        {name:"» **Ping**",value:client.ws.ping + " ms",inline:true},
        {name:"» **Bit**", value: `\`${os.arch()}\``, inline:true},
        {name:"» **OS**",value:`\`\`${os.platform()}\`\``, inline:true},
        {name:"» **CPU**", value:`\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``},
        {name:"**» Invite**", value:" [Davet Et](https://discord.com/oauth2/authorize?client_id=801458394573570058&scope=client&permissions=8)", inline:true},
        {name: "**» Support server**", value:"[Open Source Link](https://github.com/Yolster/f1data)", inline:true}
        )

    return interaction.reply({ embeds: [embed] });
    }
 };
