const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
var unirest = require('unirest');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("teaminfo")
    .setDescription("Get Formula 1 teams information!")
    .addStringOption(option =>
      option.setName('team')
        .setDescription('You can search team by name. Example mercedes or mclaren.')
        .setRequired(true)
        .setMaxLength(50)),
    run: async (client, interaction) => {
      var team =  interaction.options.getString('team') 
    
      var req = unirest('GET', `https://v1.formula-1.api-sports.io/teams?search=${team}`)
      .headers({
        "x-rapidapi-key": "dfa12c93156d0052886134158d4845ad",
        "x-rapidapi-host": "v1.formula-1.api-sports.io",
      })
      .end(function (res) {
        if (res.error) throw new Error(res.error);
        var data = JSON.parse(res.raw_body);

        if(data.results < 1) return interaction.reply('<:false:1018601164440359133> Team not found.')
        
        const embed = new EmbedBuilder()
      .setColor('#32a8a4')
      .setTitle('Team Information')
      .addFields(
        {name: "Name", value: `${data.response[0].name}`, inline: true },
        {name: "Base",value: `${data.response[0].base}`,inline: true },
        {name: "First Entry", value: `${data.response[0].first_team_entry}`, inline: true },
        {name: "World Championships",value: `${data.response[0].world_championships}`,inline: true },
        {name: "Pole Positions", value: `${data.response[0].pole_positions}`, inline: true },
        {name: "Fastest Laps", value: `${data.response[0].fastest_laps}`, inline: true },
        {name: "President",value: `${data.response[0].president}`,inline: true },
        {name: "Director", value: `${data.response[0].director}`, inline: true },
        {name: "Technical Manager", value: `${data.response[0].technical_manager}`, inline: true },
        {name: "Chassis", value: `${data.response[0].chassis}`, inline: true },
        {name: "Engine", value: `${data.response[0].engine}`,inline: true },
        {name: "Tyres", value: `${data.response[0].tyres}`,inline: true },
      )
      .setThumbnail(data.response[0].logo)
      .setAuthor({
        name:`${data.response[0].name}`,
        iconURL:data.response[0].logo,
        url:"https://discord.gg/dFVggKATCf"
      })
    
      return interaction.reply({ embeds: [embed] });
      });


      }
 };

