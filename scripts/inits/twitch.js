function initTwitch(channelName)
{
	var embed = new Twitch.Embed("twitchPanel", {
		width: "100%",
		height: "100%",
		theme : "dark",
		channel: channelName
	});
}