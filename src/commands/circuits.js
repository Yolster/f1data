const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
var unirest = require('unirest');
const { rapidkey } = require('../../config.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("circuits")
    .setDescription("Get Formula 1 circuits information!")
    .addStringOption(option =>
      option.setName('circuit')
        .setDescription('You can search circuits by name. Example Istanbul park or Melbourne.')
        .setRequired(true)
        .setMaxLength(50)),
    run: async (client, interaction) => {
      var circuit =  interaction.options.getString('circuit') 
    
      var req = unirest('GET', `https://v1.formula-1.api-sports.io/circuits?search=${circuit}`)
      .headers({
        "x-rapidapi-key": rapidkey,
        "x-rapidapi-host": "v1.formula-1.api-sports.io",
      })
      .end(function (res) {
        if (res.error) throw new Error(res.error);
        var data = JSON.parse(res.raw_body);

        if(data.results < 1) return interaction.reply('<:false:1018601164440359133> Circuit not found.')
      
        const embed = new EmbedBuilder()
      .setColor('#0099FF')
      .setTitle('Circuit Information')
      .addFields(
        {name: "Name", value: `${data.response[0].name}`, inline: true },
        {name: "Competition Name",value: `${data.response[0].competition.name}`,inline: true },
        {name: "Firts Grand Prix", value: `${data.response[0].first_grand_prix}`, inline: true },
        {name: "Laps", value: `${data.response[0].laps}`, inline: true },
        {name: "Length", value: `${data.response[0].length}`, inline: true },
        {name: "Race Distance",value: `${data.response[0].race_distance}`,inline: true },
        {name: "Capacity",value: `${data.response[0].capacity}`,inline: true },
        {name: "Opened", value: `${data.response[0].opened}`, inline: true },
        {name: "Owner", value: `${data.response[0].owner}`, inline: true },
      )
      .setThumbnail(data.response[0].image)
      .setAuthor({
        name:`${data.response[0].name}`,
        iconURL:data.response[0].image,
        url:"https://discord.gg/dFVggKATCf"
      })
      .setImage(`${data.response[0].image}`)
    
      return interaction.reply({ embeds: [embed] });
      });


      }
 };

