const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
var unirest = require('unirest');
const { rapidkey } = require('../../config.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("driver-ranks")
    .setDescription("Get Formula 1 driver ranks information by season!")
    .addStringOption(option =>
      option.setName('season')
        .setDescription('You can search ranks by season. Example 2020 or 2010.')
        .setRequired(true)
        .setMaxLength(50)),
    run: async (client, interaction) => {
      var season =  interaction.options.getString('season') 
    
      var req = unirest('GET', `https://v1.formula-1.api-sports.io/rankings/drivers?season=${season}`)
      .headers({
        "x-rapidapi-key": rapidkey,
        "x-rapidapi-host": "v1.formula-1.api-sports.io",
      })
      .end(function (res) {
        if (res.error) throw new Error(res.error);
        var data = JSON.parse(res.raw_body);

        if(data.results < 1) return interaction.reply('<:false:1018601164440359133> Season not found.')
      
        const embed = new EmbedBuilder()
      .setColor('#0099FF')
      .setTitle(`${season} Season - Driver Ranks`)
      .setDescription('**Driver Name** - **Team** - **Points**')
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor({
        name:`${client.user.username}`,
        iconURL:client.user.displayAvatarURL(),
        url:"https://discord.gg/dFVggKATCf"
      })
      for(i=0; i<20; i++){
        embed.addField({name:i+1, value:`${data.response[i].driver.name} **-** ${data.response[i].team.name} **-** ${data.response[i].points}`})
      }
    
      return interaction.reply({ embeds: [embed] });
      });


      }
 };

