function toggleMenu() {
	if($('#adminPanel').is(':visible')) {
		$("#adminPanel").toggle(false);
		$("#twitchPanel").removeClass("col-sm-" + (12 - size)).addClass("col-sm-12");
		$("#toggle").text(language.Toggle.Show);
	} else {
		$("#adminPanel").toggle(true);
		$("#twitchPanel").removeClass("col-sm-12").addClass("col-sm-" + (12 - size));
		$("#toggle").text(language.Toggle.Hide);
	}
}

function changeSize(newSize) {
	$("#adminPanel").toggle(true);
	$("#toggle").text(language.Toggle.Hide);
	$("#adminPanel").removeClass("col-sm-" + size).addClass("col-sm-" + newSize);
	$("#twitchPanel").removeClass("col-sm-" + (12 - size)).addClass("col-sm-" + (12 - newSize));
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
	$('#bettingMultipleYes').text(language.Betting.MultipleYes);
	$('#bettingMultipleNo').text(language.Betting.MultipleNo);
	$('#bettingWinnerBtn').text(language.Betting.Winner);
	$('#bettingStop').text(language.Betting.Stop);
	$('#bettingStart').text(language.Betting.Start);

	$('#polls').text(language.Polls.Polls);
	$('#pollsTitle').attr("placeholder", language.Polls.Title);
	$('#pollsOptions').attr("placeholder", language.Polls.Options);
	$('#pollsCost').attr("placeholder", language.Polls.Cost);
	$('#pollsMax').attr("placeholder", language.Polls.MaxVote);
	$('#pollsMultiple').text(language.Polls.Multiple);
	$('#pollsMultipleYes').text(language.Polls.MultipleYes);
	$('#pollsMultipleNo').text(language.Polls.MultipleNo);
	$('#pollsStop').text(language.Polls.Stop);
	$('#pollsStart').text(language.Polls.Start);

	$('#other').text(language.Other.Other);
	$('#otherVariable').attr("placeholder", language.Other.Variable);
	$('#otherName').text(language.Other.ChannelName);
	$('#otherGame').text(language.Other.ChannelGame);
	$('#otherSkip').text(language.Other.SkipSong);
	$('#otherAdd').text(language.Other.AddSong);
	$('#otherTimeout').text(language.Other.TimeoutUser);
	$('#otherBan').text(language.Other.BanUser);

	$('#toggle').text(language.Toggle.Hide);
	$('#size1').text(language.Toggle.Size1);
	$('#size2').text(language.Toggle.Size2);
	$('#size3').text(language.Toggle.Size3);
	$('#size4').text(language.Toggle.Size4);
}