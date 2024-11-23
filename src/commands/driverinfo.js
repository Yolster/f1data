const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
var unirest = require('unirest');
const { rapidkey } = require('../../config.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("driverinfo")
    .setDescription("Get Formula 1 drivers information!")
    .addStringOption(option =>
      option.setName('driver')
        .setDescription('You can search driver by name. Example lewi or latifi.')
        .setRequired(true)
        .setMaxLength(50)),
    run: async (client, interaction) => {
      var driver =  interaction.options.getString('driver') 
    
      var req = unirest('GET', `https://v1.formula-1.api-sports.io/drivers?search=${driver}`)
      .headers({
        "x-rapidapi-key": rapidkey,
        "x-rapidapi-host": "v1.formula-1.api-sports.io",
      })
      .end(function (res) {
        if (res.error) throw new Error(res.error);
        var data = JSON.parse(res.raw_body);

        if(data.results < 1) return interaction.reply('<:false:1018601164440359133> Driver not found.')
      
        const embed = new EmbedBuilder()
      .setColor('#0099FF')
      .setTitle('Driver Information')
      .addFields(
        {name: "Name", value: `${data.response[0].name}`, inline: true },
        {name: "Nationality",value: `${data.response[0].nationality}`,inline: true },
        {name: "Birth Date", value: `${data.response[0].birthdate}`, inline: true },
        {name: "Birth Place", value: `${data.response[0].birthplace}`, inline: true },
        {name: "Number", value: `${data.response[0].number}`, inline: true },
        {name: "Grands Prix Entered",value: `${data.response[0].grands_prix_entered}`,inline: true },
        {name: "World Championships",value: `${data.response[0].world_championships}`,inline: true },
        {name: "Podiums", value: `${data.response[0].podiums}`, inline: true },
        {name: "Highest Grid Position", value: `${data.response[0].highest_grid_position}`, inline: true },
        {name: "Career Points", value: `${data.response[0].career_points}`, inline: true },
      )
      .addFields({name: "Team", value: `${data.response[0].teams[0].team.name}`})
      .setThumbnail(data.response[0].image)
      .setAuthor({
        name:`${data.response[0].name}`,
        iconURL:data.response[0].image,
        url:"https://discord.gg/dFVggKATCf"
      })
    
      return interaction.reply({ embeds: [embed] });
      });


      }
 };

