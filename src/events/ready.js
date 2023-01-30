const { ActivityType } = require("discord.js")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
    let activities = [ `New cars`, `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users`, `f1.tv`], i = 0;
    setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Watching }), 22000);
}};