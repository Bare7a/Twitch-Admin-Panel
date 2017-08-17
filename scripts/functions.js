$(document).ready(function() {
	document.title = title;

	var embed = new Twitch.Embed("twitchPlayer", {
		width: "100%",
		height: "100%",
		theme : "dark",
		channel: channelName
	});

	$(document).keydown(function(e){
		if (e.keyCode == 192) { 
			toggleMenu();
		}
	});

	$("#size1").click(function (e)
	{
		changeSize(2);
	});

	$("#size2").click(function (e)
	{
		changeSize(3);
	});

	$("#size3").click(function (e)
	{
		changeSize(4);
	});

	$("#size4").click(function (e)
	{
		changeSize(5);
	});

	$("#toggleButton").click(function (e)
	{
		toggleMenu();
	});

	changeLanguage(language);
});

function toggleMenu() {
	if($('#adminPanel').is(':visible')) {
		$("#adminPanel").toggle(false);
		$("#twitchPlayer").removeClass("col-sm-" + (12 - size)).addClass("col-sm-12");
		$("#toggleButton").text("Hide");
	} else {
		$("#adminPanel").toggle(true);
		$("#twitchPlayer").removeClass("col-sm-12").addClass("col-sm-" + (12 - size));
		$("#toggleButton").text("Show");
	}
}

function changeSize(newSize) {
	$("#adminPanel").removeClass("col-sm-" + size).addClass("col-sm-" + newSize);
	console.log("Size: " + size + " | New Size: " + newSize);
	$("#twitchPlayer").removeClass("col-sm-" + (12 - size)).addClass("col-sm-" + (12 - newSize));
	console.log("Size: " +  (12 - size) + " | New Size: " + (12 - newSize));
	size = newSize;
}

function copyToClipboard(textToCopy) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val(textToCopy).select();
	document.execCommand("copy");
	$temp.remove();
}

function changeLanguage(language)
{
	$('#points').text(language.Points.Points);
	$('#pointsPoints').attr("placeholder", language.Points.Points);
	$('#pointsUsername').attr("placeholder", language.Points.Username);
	$('#pointsGive').text(language.Points.Give);
	$('#pointsTake').text(language.Points.Take);

	$('#betting').text(language.Betting.Betting);
	$('#bettingTitle').attr("placeholder", language.Betting.Title);
	$('#bettingQuestions').attr("placeholder", language.Betting.Questions);
	$('#bettingMin').attr("placeholder", language.Betting.Min);
	$('#bettingMax').attr("placeholder", language.Betting.Max);
	$('#bettingWinner').attr("placeholder", language.Betting.Winner);
	$('#bettingPayout').attr("placeholder", language.Betting.Payout);
	$('#bettingMultiple').text(language.Betting.Multiple);
	$('#bettingWinnerBtn').text(language.Betting.Winner);
	$('#bettingStop').text(language.Betting.Stop);
	$('#bettingStart').text(language.Betting.Start);

	$('#polls').text(language.Polls.Polls);
	$('#pollsTitle').attr("placeholder", language.Polls.Title);
	$('#pollsOptions').attr("placeholder", language.Polls.Options);
	$('#pollsCost').attr("placeholder", language.Polls.Cost);
	$('#pollsMax').attr("placeholder", language.Polls.MaxVote);
	$('#pollsMultiple').text(language.Polls.Multiple);
	$('#pollsStop').text(language.Polls.Stop);
	$('#pollsStart').text(language.Polls.Start);

	$('#other').text(language.Other.Other);
	$('#otherVariable').attr("placeholder", language.Other.Variable);
	$('#otherName').text(language.Other.ChannelName);
	$('#otherGame').text(language.Other.ChannelGame);
	$('#otherSkip').text(language.Other.SkipSong);
	$('#otherTimeout').text(language.Other.TimeoutUser);
	$('#otherBan').text(language.Other.BanUser);
}